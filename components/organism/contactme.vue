<template>
  <div>
    <h2>Contactez-moi</h2>
    <form>
      <label for="name">Nom</label>
      <input type="text" name="neme" />
    </form>
    <!-- <vue-recaptcha
        theme="light"
        size="normal"
        :tabindex="0"
        @verify="callbackVerify($event)"
      /> -->
  </div>
</template>

<script setup>
import emailjs from "emailjs-com";
import { VueRecaptcha } from "vue3-recaptcha-v2";

const name = ref("");
const email = ref("");
const message = ref("");

const callbackVerify = (e) => {
  console.log(e);
};

const sendEMail = (e) => {
  emailjs.sendForm("service_j78itff", "template_ixguscf", e.target, "e1g13XosLwEXdsVRE");
};
</script>

<style scoped></style>
