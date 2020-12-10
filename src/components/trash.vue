<template>
  <template>
    <div>

      <v-row no-gutters class="profile">
        <v-col>
          <v-card
              elevation="3"
              shaped
              height="80vh"
              class="scroll"
          >
            <div id="profile">
              <v-avatar size="128">
                <img src="@/assets/alien.png" alt="">
              </v-avatar>
              <v-dialog
                  v-model="dialog"
                  scrollable
                  max-width="400px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      x-small
                  >
                    Change Image
                  </v-btn>
                </template>
                <v-card>
                  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :useCustomSlot=true>
                    <div class="dropzone-custom-content">
                      <h3 class="dropzone-custom-title">Drag and drop your file</h3>
                      <h5 class="subtitle">...or click to select a file from your computer</h5>
                    </div>
                  </vue-dropzone>
                  <p id="path"></p>
                  <v-card-actions>
                    <v-btn
                        color="blue darken-1"
                        outlined
                        @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        outlined
                        @click="dialog = false"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <h3>Username</h3>
            <p>Firstname Lastname</p>
            <p><v-icon>mdi-map-marker</v-icon> City</p>
            <p><v-icon>mdi-comment-minus</v-icon> Quote - I'm stupid</p>
            <p><v-icon>mdi-cake-variant</v-icon> 2000-01-01</p>
            <v-btn
                elevation="1"
                tile
                small
            >
              Edit Profile
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
</template>

<script>
export default {
  name: "trash"
}
</script>

<style scoped>

</style>