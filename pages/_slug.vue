<template>
    <div>
        <h1> {{ this.slug }} </h1>
    </div>
</template>

<script>
export default {
    async asyncData({params}) {
        const slug = params.slug
        return { slug }
    }
}
</script>