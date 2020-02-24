<template>
    <div class="experience">
        <div class="container">
            <div class="sectionHead">
                <h1>Work Experience</h1>
                <h6>Pass and current jobs</h6>
            </div>
            <div class="timeline">
                <ul>
                    <li class="date" data-date="2019 July - 2019 August">
                        <h1><img class="logo" v-lazy="require('../assets/siemens.svg')"/>&nbsp;&nbsp;MindSphere World</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                    <li class="date" data-date="2019 September - Present">
                        <h1><img class="logo" v-lazy="require('../assets/siemens.svg')"/></h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Experience',
}
</script>

<style src="./styles/Experience.scss" lang="scss" scoped/>
