<template>
    <div>
        <div>My nav bar</div>
        <Nuxt :nuxtChildKey="someKey"/>
        <div>Ny footer</div>
    </div>
</template>

<script>
export default {
    key(route) {
        console.log(route)
        return route.fullPath
    }
}
</script>