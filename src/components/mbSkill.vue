<template>
    <div class="skill">
        <skill-article v-for="(item, index) in ArticleTitle" :title="item.title" :key="index"></skill-article>
    </div>
</template>

<script>
    import skillArticle from '@/components/skillArticle';
    
    export default {
        components: {
            'skill-article': skillArticle
        },
        data() {
            return {
                ArticleTitle: [
                    {
                        title: '千年编程史'
                    },
                    {
                        title: '难过的奇幻王国'
                    },
                    {
                        title: '外星文明与日不落帝国'
                    },
                    {
                        title: '旷日持久的战争之门'
                    },
                    {
                        title: '真难受'
                    },
                    {
                        title: '飞机大战'
                    }
                ]
            }
        }
    }
    
</script>

<style scoped>
    .skill {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
    }
</style>

