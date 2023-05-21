<template>
  <div>
    <h2>Contactez-moi</h2>
    <form class="flex flex-col gap-8 lg:w-1/2 mx-auto">
      <AtomTextInput
        type="basic"
        label="Nom complet"
        id="name"
        place-holder="Écrivez votre nom"
      />
      <AtomTextInput
        type="email"
        label="Courriel"
        id="email"
        place-holder="Écrivez votre adresse courriel"
      />
      <AtomTextInput
        type="area"
        label="Message"
        id="content"
        place-holder="Écrivez votre sympathique message. De préférence, par rapport à un potentiel emploie, mais j'accepte aussi des recettes asiatique."
      />
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
