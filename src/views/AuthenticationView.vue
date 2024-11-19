<template>

    <div class="authentication-wrapper h-full p-xlg bg-color-brand-one">

        <div class="authentication-navigation-logo flex x-center">
            <img
                class="rounded-lg" 
                src="/assets/images/image-logo-small.png"
            >
        </div>

        <div class="authentication-navigation-types flex x-center y-center gap-md">

            <ButtonBasic
                class="bg-none rounded w-auto"
                :class="type_page_view == 'type_singin' ? 'color-brand-three' : 'color-brand-five'"
                @click="type_page_view = 'type_singin'"
            >
                <p class="font-md">{{ $translate('labels.authentication.singin') }}</p>
            </ButtonBasic>

            <span class="navigation-types-division"></span>

            <ButtonBasic
                class="bg-none rounded w-auto"
                :class="type_page_view == 'type_singup' ? 'color-brand-three' : 'color-brand-five'"
                @click="type_page_view = 'type_singup'"
            >
                <p class="font-md">{{ $translate('labels.authentication.singup') }}</p>
            </ButtonBasic>
            
        </div>

        <div
            v-if="type_page_view == 'type_singin'" 
            class="authentication-login flex flex-column y-start gap-md"
        >
            <h1 
                style="font-weight: 200"
                class="o-3-4 font-xlg"
                v-html="$translate('labels.authentication.welcome')">
            </h1>
        </div>

        <div
            v-else 
            class="authentication-register"
        >

        </div>

    </div>

</template>

<script>

import { setValueRootStorage, getValueRootStorage} from "@/utils/storage"

import * as Button from "@/components/Button";

export default{
    data(){
        return{
            type_page_view: "type_singin",
        }
    },
    components: {
        ...Button
    },
}

</script>

<style lang="scss" scoped>

.authentication-wrapper{

    .authentication-navigation-logo{

        padding: 40px 0px 40px 0px;

        img{
            height: 80px;
        }

    }

    .authentication-navigation-types{

        span{
            height: 18px;
            border-right: 1px solid var(--color-brand-five);
        }

    }

    .authentication-login{

        h1{
            margin-top: 60px;
        }

    }

}

</style>