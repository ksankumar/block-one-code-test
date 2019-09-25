<template>
  <v-card flat tile :disabled="loading">
    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm10 v-if="blockList">
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item, i) in blockList" :key="i">
            <v-expansion-panel-header class="py-0">
              <v-avatar color="indigo">
                <span class="white--text headline">{{i+1}}</span>
              </v-avatar>
              <v-list-item-content class="ml-3">
                <v-list-item-title class="mb-0"><span class="headline">Block id# </span><u>{{item.id}}</u>
                </v-list-item-title>
                <v-list-item-subtitle class="my-2"><b>Timestamp:</b> {{item.timestamp}}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-chip color="blue lighten-4">
                    <v-avatar left class="blue lighten-2 white--text">
                      {{item.transactions.length||0}}
                    </v-avatar>
                    Actions
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="mt-3">
              <code style="width: 100%; overflow: auto;">{{JSON.stringify(item, null, 4)}}</code>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
    export default {
        name: 'Blocks',
        computed: {
            loading () {
                return this.$store.getters['Blocks/Loading']
            },
            blockList () {
                return this.$store.getters['Blocks/List']
            }
        }
    }
</script>
