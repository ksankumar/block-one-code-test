<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-avatar>
          <img :src="require('../src/assets/logo.png')" alt="block-logo">
        </v-avatar>
        <span class="font-weight-light" v-if="$vuetify.breakpoint.mdAndUp">Block.one</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="4" sm="2">
        <v-select
          :items="[5, 10, 15, 20, 25, 30]"
          v-model="recordLength"
          @change="setRecordLength"
          label="Blocks count"
          solo
          hide-details
        ></v-select>
      </v-col>
      <v-btn
        :disabled="loading"
        color="pink"
        @click.stop="getBlocks">
        <v-progress-circular
          v-if="loading"
          indeterminate
          :value="count*setRecordLength"
          color="pink">
          {{ count}}
        </v-progress-circular>
        <template v-else>
          <span class="white--text">Load</span>
          <v-icon color="white" right>mdi-progress-download</v-icon>
        </template>
      </v-btn>
      <v-progress-linear
        v-if="loading"
        color="pink darken-3"
        :buffer-value="progress"
        :value="progress"
        height="10"
        absolute
        striped
        bottom
        reactive
        stream>
        <template v-slot="{ value }">
          <b class="overline text-lowercase black--text">{{recordLength-count}} more blocks left</b>
        </template>
      </v-progress-linear>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <Blocks/>
      </v-container>
    </v-content>
    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm10>
        <v-alert
          v-model="onError"
          prominent
          type="error"
          border="top"
          transition="scale-transition"
          elevation="2">
          <v-row align="center">
            <v-col class="grow">{{errorText}}</v-col>
            <v-col class="shrink">
              <v-btn dark color="indigo" @click.stop="getBlocks">Reload</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-flex>
    </v-layout>
    <v-snackbar multi-line v-model="showSnackBar">
      <v-icon left color="green">mdi-file-document-box-check-outline</v-icon>
      {{ recordLength }} most recent Blocks has been updated.
      <v-btn color="blue" text @click="showSnackBar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
    import Blocks from './components/Blocks.vue'

    export default {
        name: 'App',
        data: (vm) => ({
            recordLength: vm.$store.getters['Blocks/RecordLength'],
            showSnackBar: false
        }),
        components: {
            Blocks
        },
        computed: {
            loading () {
                return this.$store.getters['Blocks/Loading']
            },
            progress () {
                return this.count / this.recordLength * 100
            },
            count () {
                const count = this.$store.getters['Blocks/Count']
                this.showMessage(count)
                return count
            },
            onError () {
                return this.$store.getters['Blocks/Error'] !== null
            },
            errorText () {
                return this.$store.getters['Blocks/Error']
            }
        },
        created () {
            this.getBlocks()
        },
        methods: {
            isError (error) {
                return error !== null
            },
            setRecordLength () {
                this.$store.commit('Blocks/RecordLength', this.recordLength)
            },
            getBlocks () {
                this.$store.dispatch('Blocks/List')
            },
            showMessage (count) {
                this.showSnackBar = !!(count > 0 && count === this.recordLength)
            }
        }
    }
</script>

<style>
  .v-application--wrap {
    overflow: hidden;
  }
</style>
