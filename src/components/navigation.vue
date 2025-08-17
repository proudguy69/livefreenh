<template>
    <UNavigationMenu 
    :items="navigationItems"
    class="bg-nhblue-900 px-4"
    :ui="{
        content: 'bg-nhblue-900'
    }"
    content-orientation="vertical"
    >
        <template #item-leading="{ item }">
            <img v-if="item.img" :src="item.img" alt="" class="w-5 h-5 object-contain" />
            <UIcon v-else-if="item.icon" :name="item.icon" class="size-5" />
            <UAvatar v-else-if="item.avatar" v-bind="item.avatar" />
        </template>
    </UNavigationMenu>
</template>

<script setup>
import IconPng from '@/assets/icon.png'

const navigationItems = [
    {
        label: 'Home',
        img: IconPng,
        to: '/',
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Events',
        popover: {
            mode: 'click'
        },
        ui: {
            viewport: 'w-auto min-w-48',      // Controls the dropdown's outer container width
            content: 'w-auto min-w-48',       // Controls the dropdown's content area
            childList: 'w-auto min-w-48',     // Controls the list of child items
        },
        children: [
            {
                label: 'Upcoming',
                to: {name: 'upcomingevents'}
            },
            {
                label: 'Prior',
                to: {name: 'priorevents'}
            },
            {
                label: 'Make Event',
                to: {name: 'createevent'}
            }
        ]
    }
]

</script>