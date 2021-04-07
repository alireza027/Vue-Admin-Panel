<template>

    <!-- add menu -->
    <Menu-Tooltip-Button />

</template>

<script>

// add components 
import SettingTooltip from './SettingTooltip/index';

export default {
    name:"Setting",
    components: {
        "Menu-Tooltip-Button" : SettingTooltip
    },
}
</script>

<style>

</style>