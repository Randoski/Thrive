<template>
    <div>
        <Navbar />
        <HeroSection />
        <HeroSection3 />
        <Faq />
        <HeroSection2 />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import HeroSection2 from '../components/HeroSection2.vue'
import HeroSection3 from '../components/HeroSection3.vue'
import Faq from '../components/Faq.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        HeroSection,
        HeroSection2,
        HeroSection3,
        Faq,
        Footer,
    },
}
</script>

