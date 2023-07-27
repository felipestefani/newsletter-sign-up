<script setup>
  import router from "../router";
  import Footer from "../components/Footer.vue";
  import { ref, onMounted, onUnmounted } from "vue";

  const navigate = link => router.push(link)
  const list = ['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!' ]
  const email = ref('')
  const invalidEmail = ref(false)
  const useWindowSize = () => {
    const width = ref(window.innerWidth)
    const updateSize = () => {
      width.value = window.innerWidth
    }

    onMounted(() => {
      window.addEventListener('resize', updateSize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateSize)
    })

    return width
  }
  const width = useWindowSize()
  const subscribe = () => {
    const valid_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    valid_email.test(email.value) 
      ? navigate('/success-sign-up')
      : invalidEmail.value = !invalidEmail.value
  }
</script>

<template>
  <div class="container">
    <main>
      <img v-if="width < 850" class="mobile_image" src="../assets/images/illustration-sign-up-mobile.svg" alt="ilustaçao desktop">
      <section>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p> 
        <ul>
          <li v-for="item in list" :key="item"><img class="list_bullet" src="../assets/images/icon-list.svg" alt="">{{item}}</li>
        </ul>
        <form @submit.prevent="subscribe">
          <label for="email">
            <div class="labels">
              Email address
              <span v-if="invalidEmail">Valid email required</span>
            </div>
            <input v-model="email" :class="{ivalid_email: invalidEmail}" type="text" placeholder="email@company.com" @keyup="invalidEmail=false">
          </label>
          <button>Subscribe to monthly newsletter</button> 
        </form>   
      </section>
      <img v-if="width > 850" class="desktop_image" src="../assets/images/illustration-sign-up-desktop.svg" alt="ilustaçao desktop">
    </main>
  </div>
  <Footer />
</template>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
  }
  main{
    display: flex;
    flex-direction: row;
    background-color: hsla(0, 0%, 100%, 0.98);
    border-radius: 30px;
    max-width: 55em;
  }
  section{
    padding: 0 2.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p{
    line-height: 1.5em;
  }
  h1 {
    padding-bottom: 0.3em;
    font-size: 3.5em;
    color: hsl(234, 29%, 20%);
  }
  ul{
    list-style-type: none;
    margin: 1em 0 2em ;
  }
  li{
    display: flex;
    align-items: center;
    padding: 0.5em 0;
  }
  .list_bullet{
    padding-right: 1em;
  }
  label{
    font-size: 12px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    color: hsl(234, 29%, 20%);
  }
  .labels{
    display: flex;
    justify-content: space-between;
  }
  span{
    color: hsl(4, 100%, 67%);
  }
  input, button {
    border: none;
    border: 1px solid hsl(231, 7%, 60%);
    line-height: 3em;
    border-radius: 5px;
    padding-left: 1.5em;
    margin-bottom: 1em;
    font-size: 16px;
  }
  button{
    width: 100%;
    font-weight: 700;
    color: hsla(0, 0%, 100%, 0.98);
    background-color: hsl(234, 29%, 20%);
    padding: 0;
  }
  .ivalid_email {
    border: 1px solid hsl(4, 100%, 67%);
    background-color: hsla(4, 100%, 67%, 0.1);
    color: hsl(4, 100%, 67%);
  }
  .desktop_image {
    width: 48.5%;
    padding: 1.5em;
  }
  button:hover, input:hover{
    cursor: pointer;
  }
  button:hover{
    background: linear-gradient(to right, hsl(325, 73%, 66%), 20%,hsl(4, 100%, 67%));
  }
  input:hover {
    border: 1px solid hsl(234, 29%, 20%);
  }

  @media (max-width: 850px) {
    main{
      width: 100%;
      flex-direction: column;
      align-items: center;
      border-radius: 0;
    }
    section{
      padding: 0 1.5em;
    }
    h1{
      font-size: 39px;
      padding-top: 1em;
    }
    .mobile_image {
      width: 100%;
    }
  }
 


</style>
