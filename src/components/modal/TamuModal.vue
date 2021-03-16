<template>
  <base-modal :idModal="'tamu'">
    <template>
      <h1 class="title-modal text-center mb-0">Guestbook</h1>
      <p>
        Share your hopes, support, jokes, poems, or any thoughts with us! We'll
        be glad to hear from you.
      </p>
      <b-row>
        <b-col cols="12" md="6">
          <b-form ref="form" @submit.stop.prevent="handleSubmit" class="mt-3">
            <b-form-group label="Name" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="text"
                placeholder="Enter your name"
                required
                autofocus
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Email" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="text"
                placeholder="Enter your email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Message"
              label-for="textarea"
              class="mb-0 textarea-title"
            >
              <b-form-textarea
                id="textarea"
                v-model.trim="form.message"
                placeholder="Write your message here..."
                size="sm"
                cols="10"
              ></b-form-textarea>
            </b-form-group>

            <div class="btn-wrapper">
              <b-button
                type="submit"
                block
                class="mt-4 btn-auth btn-auth-primary"
                >Submit</b-button
              >
            </div>
          </b-form>
        </b-col>
        <b-col cols="12" md="6">
          <p>test</p>
        </b-col>
      </b-row>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from "../ui/BaseModal";
export default {
  components: { BaseModal },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>

<style>
label,
.form-control {
  font-size: 1.5rem;
}
</style>

<style>
/* Portrait Ipad */
@media only screen and (min-width: 768px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  #tamu .modal-dialog-scrollable .modal-content.basemodal__content {
    width: 94vw;
    max-width: 98vw;
    max-height: 63vh;
  }
}
</style>