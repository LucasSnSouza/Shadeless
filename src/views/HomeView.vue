<template>

    <div class="home-wrapper flex flex-column h-full">

        <div class="home-top-messages h-full scroll-y">

            <div
                v-for="(item, index) of form_interaction"
                class="p-lg"
                :key="index"
            >  

                <div class="flex x-end">
                    <div 
                        style="padding: 10px 24px 10px 24px; max-width: 80%;"
                        class="send-message-ballon p-lg rounded bg-color-brand-four w-auto"
                    >
                        {{ item?.send?.message }}
                    </div>
                </div>

                <div class="flex x-start">
                    <div class="response-message-ballon p-lg">
                        {{ item?.response?.message }}
                    </div>
                </div>
            
            </div>

        </div>

        <div class="home-bottom-input p-md">

            <div class="bottom-input-custom rounded-lg flex flex-column">
                <div>
                    <InputBasic
                        v-model="form_screen_data['search']"
                        class="bg-none font-md w-full p-lg"
                        placeholder="Mensagem"
                        :value="form_screen_data['search']"
                    />
                </div>
                <div class="input-custom-items flex p-lg">
                    <div class="w-full flex x-start y-center">

                        <ButtonBasic
                            class="bg-color-brand-three color-brand-one p-md rounded-md w-auto"
                            @click="sendMessageProcessator()"
                        >
                            <MiscIcon
                                icon="image-photography-icon"
                                color="#FFFFFF"
                                :size="[19,19]"
                            />
                        </ButtonBasic>
                        
                    </div>
                    <div class="w-full flex x-end">
                        <ButtonBasic
                            class="bg-color-brand-three color-brand-one p-md rounded-md w-auto"
                            @click="sendMessageProcessator()"
                        >
                            <p class="font-sm">Send</p>
                        </ButtonBasic>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button";
import * as Input from "@/components/Input";
import * as Misc from "@/components/Misc";

export default{
    data(){
        return{
            form_screen_data: {

            },
            form_interaction: [
                
            ]
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc,
    },
    methods:{
        sendMessageProcessator(){
            this.form_interaction.push({
                send: {
                    message: this.form_screen_data?.search
                },
                response: {
                    message: "Claro, os aplicativos que você está atrelados são."
                }
            })
        }
    }
}

</script>

<style lang="scss" scoped>

.home-wrapper{

    .home-bottom-input{

        .bottom-input-custom{
            background: rgb(238, 238, 238);

            .input-custom-items{
                padding-top: 0px;
            }
        }
    }

}

</style>