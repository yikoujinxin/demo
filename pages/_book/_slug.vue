<template>
    <h1> {{ this.book }} / {{ this.slug }} </h1>
</template>

<script>
export default {
    async asyncData({params}) {
        const book = params.book
        const slug = params.slug
        return { book, slug }
    }
}
</script>