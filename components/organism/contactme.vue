<template>
  <div>
    <h2>Contactez-moi</h2>
    <form class="">
      <AtomTextInput type="basic" label="Nom complet" id="name" />
      <AtomTextInput type="email" label="Couriel" id="email" />
      <AtomTextInput type="area" label="Mesaage" id="content" />
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
import emailjs from 'emailjs-com';
import { VueRecaptcha } from 'vue3-recaptcha-v2';

const name = ref('');
const email = ref('');
const message = ref('');

const callbackVerify = e => {
  console.log(e);
};

const sendEMail = e => {
  emailjs.sendForm(
    'service_j78itff',
    'template_ixguscf',
    e.target,
    'e1g13XosLwEXdsVRE'
  );
};
</script>

<style scoped></style>
