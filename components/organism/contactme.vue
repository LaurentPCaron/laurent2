<template>
  <div class="container">
    <form @submit.prevent="sendEMail">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>
      <vue-recaptcha
        theme="light"
        size="normal"
        :tabindex="0"
        @verify="callbackVerify($event)"
      />

      <input type="submit" value="Send" />
    </form>
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

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  color: black;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type='text'],
[type='email'],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type='submit'] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #45a049;
}
</style>
