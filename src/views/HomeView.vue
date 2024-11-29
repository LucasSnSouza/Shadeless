<template>

    <div class="home-wrapper flex flex-column h-full">

        <div class="home-top-messages h-full scroll-y">

            <div
                v-if="!(form_interaction.length > 0)"
                class="h-full p-lg flex x-center y-center"
            >
                <div>
                    <h1 class="font-xlg text-center">Como posso te ajudar?</h1>
                    <p class="font-sm text-center o-half">Abaixo você pode executar comandos de forma rapida.</p>
                    <div class="flex wrap x-center y-center gap-md">
                        <ButtonBasic
                            class="bg-color-brand-one color-brand-two shadow-sm p-lg rounded-lg w-auto"
                            @click="sendDirectMessageProcessator('mostre seus aplicativos')"
                        >
                            <p class="o-3-4 font-sm">Meus aplicativos</p>
                        </ButtonBasic>
                        <ButtonBasic
                            class="bg-color-brand-one color-brand-two shadow-sm p-lg rounded-lg w-auto"
                            @click="sendDirectMessageProcessator('mostre seus comandos')"
                        >
                            <p class="o-3-4 font-sm">Comandos disponiveis</p>
                        </ButtonBasic>
                    </div>
                </div>
            </div>

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

                <div class="flex flex-column x-start">
                    <div 
                        class="response-message-ballon p-lg"
                    >
                        {{ item?.response?.message }}
                    </div>
                    <div
                        v-if="item?.response?.images" 
                        class="response-images-ballon flex p-lg"
                    >
                        <div
                         v-for="(images, index) of item?.response?.images"
                         class="flex x-center y-center rounded-md overflow-hidden"
                         :key="index"
                        >
                            <img
                                :src="images?.thumbnail"
                            >
                        </div>
                    </div>
                    <div
                        v-if="item?.response?.buttons" 
                        class="response-images-ballon flex p-lg"
                    >
                        <div
                         v-for="(button, index) of item?.response?.buttons"
                         class="flex x-center y-center rounded-md overflow-hidden p-md"
                         :key="index"
                        >
                            <ButtonBasic
                                class="bg-color-brand-one color-brand-two shadow-sm p-lg rounded-lg w-auto"
                                @click="sendDirectMessageProcessator(button?.command)"
                            >
                                <p class="o-3-4 font-sm">{{ button?.title }}</p>
                            </ButtonBasic>
                        </div>
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

import { setValueRootStorage, getValueRootStorage} from "@/utils/storage";
import { setInteractProcess, setProcessCommand } from "@/utils/interact";
import { getSystemAplications } from "@/defaults/defaultsValues";


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
            this.form_interaction.push(
                setInteractProcess(this.form_screen_data?.search)
            )
        },
        sendDirectMessageProcessator(value){
            this.form_interaction.push(
                setInteractProcess(value)
            )
        }
    },
}

</script>

<style lang="scss" scoped>

.home-wrapper{

    .home-top-messages{

        padding-top: 60px;

        .response-images-ballon{

            padding-top: 0px;

            img{
                width: 64px;
                height: 64px;
            }

        }

    }

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