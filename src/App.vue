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
      <v-btn
        :disabled="loading"
        color="pink"
        @click.stop="getBlocks">
        <v-progress-circular
          v-if="loading"
          indeterminate
          :value="count*10"
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
        :buffer-value="count*10"
        :value="count*10"
        height="10"
        absolute
        striped
        bottom
        reactive
        stream>
        <template v-slot="{ value }">
          <b class="overline text-lowercase black--text">{{10-count}} more blocks left</b>
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
  </v-app>
</template>

<script>
    import Blocks from './components/Blocks.vue'

    export default {
        name: 'App',
        components: {
            Blocks
        },
        computed: {
            loading () {
                return this.$store.getters['Blocks/Loading']
            },
            count () {
                return this.$store.getters['Blocks/Count']
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
            getBlocks () {
                this.$store.dispatch('Blocks/List')
            }
        }
    }
</script>

<style>
  .v-application--wrap {
    overflow: hidden;
  }
</style>
