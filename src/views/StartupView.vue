<template>

    <div class="startup-wrapper h-full p-xlg bg-color-brand-one">

        <div 
            class="startup-upper-content h-full flex flex-column x-end"
        >

            <div 
                class="upper-first-step h-full flex flex-column gap-lg"
                v-if="current_step == 0"
            >
                <div class="first-step-language-choices h-full flex flex-column gap-md">

                    <div class="step-sticker flex x-center y-center h-full y-start">
                        <img
                            class="rounded-lg" 
                            src="/assets/images/image-translate-sticker.png"
                        >
                    </div>

                    <div class="first-step-buttons flex gap-md">
                        <ButtonBasic
                            v-for="(item, index) of language_buttons_form"
                            class="bg-color-brand-four rounded w-auto"
                            :class="{
                                'ghost color-brand-three': item?.selected}"
                            :index="index"
                            @click="$useLanguage(item?.abbreviation), selectAction(index)"
                        >
                            {{ item?.label }}
                        </ButtonBasic>
                    </div>
                </div>
                <h1 class="font-md">{{ $translate('labels.startup.steps.first.title') }}</h1>
                <p class="o-half font-sm">{{ $translate('labels.startup.steps.first.subTitle') }}</p>
            </div>

            <div 
                class="upper-second-step h-full flex flex-column gap-lg"
                v-else-if="current_step == 1"
            >
                <div class="step-sticker flex x-center y-center h-full y-start">
                    <img
                        class="rounded-lg" 
                        src="/assets/images/image-ask-sticker.png"
                    >
                </div>
                <h1 class="font-md">{{ $translate('labels.startup.steps.second.title') }}</h1>
                <p class="o-half font-sm">{{ $translate('labels.startup.steps.second.subTitle') }}</p>   
            </div>

        </div>

        <div class="startup-lower-content flex">

            <div class="lower-content-left flex x-start y-center w-half">

            </div>

            <div class="lower-content-right flex x-end y-center w-half h-full">

                <ButtonBasic
                    class="bg-color-brand-three color-brand-one p-lg rounded w-auto"
                    @click="current_step == 1 ? setIsView() : current_step++"
                >
                    {{ $translate('labels.nextButton') }}
                </ButtonBasic>
                
            </div>
            
        </div>

    </div>

</template>

<script>

import { setValueRootStorage, getValueRootStorage} from "@/utils/storage"

import * as Button from "@/components/Button";

export default{
    data(){
        return{
            current_step: 0,
            language_buttons_form: [
                {
                    label: "English",
                    abbreviation: "en",
                    selected: true
                },
                {
                    label: "Portuguese",
                    abbreviation: "pt",
                    selected: false
                }                
            ]
        }
    },
    components: {
        ...Button
    },
    methods: {
        selectAction(value){
            this.language_buttons_form = this.language_buttons_form.map((item, index) => ({
                ...item,
                selected: index == value
            }))
        },
        setIsView(){
            setValueRootStorage('startup_unique_vizualize', true);
            this.$router.push({ name: "Authentication" });
        }
    },
    created(){
        if(getValueRootStorage('startup_unique_vizualize')){
            this.$router.push({ name: "Authentication" });
        }else{
            setValueRootStorage('ux_language', 'en');
        }
    }
}

</script>

<style lang="scss">

.startup-upper-content{
    height: calc(100% - 100px);
}

.startup-lower-content{
    height: 100px;

    .lower-content-right{


        button{
            padding: 16px 32px 16px 32px;
            font-weight: bold;
        }

    }
}

.first-step-language-choices{

    button{
        padding: 12px 32px 12px 32px;
    }
}

.step-sticker{

    img{
        height: 160px;
}

}

</style>