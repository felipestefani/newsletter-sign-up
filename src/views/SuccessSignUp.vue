<script setup>

    const params = new URLSearchParams(window.location.search);

    // Extrai os valores
    const capture_method = params.get("capture_method");
    const transaction_id = params.get("transaction_id");
    const slug = params.get("slug");
    const order_nsu = params.get("order_nsu");
    const receipt_url = params.get("receipt_url");
    
    fetch('https://hook.us2.make.com/2eyk1u5x0yar88bbzlcnafsqcfxo4jg5', {
        method: 'POST',
        body: JSON.stringify({
            capture_method,
            transaction_id,
            slug,
            order_nsu,
            receipt_url,
            page: 'success' // Você pode adicionar outros dados fixos também
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });
</script>

<template>
    <div class="container">

        <main>
            <img src="../assets/images/icon-success.svg" alt="success icon" srcset="">
            <!--h1>Thanks for subscribing!</h1-->
            <h1>Pagamento efetuado com SUCESSO</h1>
            <!--p>
                A confirmation email has been sent to <span>ash@loremcompany.com</span>. 
                Please open it and click the button inside to confirm your subscription.
            </p-->
            <p>
                Você pode fechar essa página agora.
                Uma mensagem de confirmação também chegara para você no WhatsApp
            </p>
            <!--router-link to="/"><button> Dismiss message </button></router-link-->
        </main>  
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main{
        background-color: white;
        width: 30em;
        border-radius: 30px;
        padding: 3.5em;
    }
    h1 {
    padding: 0.5em 0 0.3em;
    font-size: 3.5em;
    color: hsl(234, 29%, 20%);
    line-height: 1em;
    }
    p{
        line-height: 1.5em;
        color: hsl(234, 29%, 20%);
    }
    span{
        font-weight: 700;
    }
    button {
        border: none;
        border: 1px solid hsl(231, 7%, 60%);
        line-height: 3em;
        border-radius: 5px;
        margin-top: 2.5em;
        font-size: 16px;
        width: 100%;
        font-weight: 700;
        color: hsla(0, 0%, 100%, 0.98);
        background-color: hsl(234, 29%, 20%);
    }

    button:hover{
        cursor: pointer;
        background: linear-gradient(to right, hsl(325, 73%, 66%), 20%,hsl(4, 100%, 67%));
    }

    @media (max-width: 850px) {
        .container{
            background-color: hsl(234, 29%, 20%);
            min-height: 100vh;
            align-items: center;
        }
        main {
            padding: 2em 1.5em 1em;
        }
        h1{
            padding: 0.8em 0 0.6em;
            font-size: 2.5em;
        }
        button{
            margin-top: 14em;
        }
    }
</style>
