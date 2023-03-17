<template>
  <InfoHeader></InfoHeader>
  <main class="container mt-7" id="root">

    <div class="p-4 p-md-5 row mx-auto mb-4  row text-white d-none rounded bg-dark ">
      <div class="px-0 col-md-6">
        <h1 class="display-4 fst-italic">The newId is {{newId}}</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently
          about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>
    <div class="row ">

      <div class=" container bg-white  col-lg-9  mt-0  js-toc-content " id="blogBody">

        <div class="nav h4 align-items-center ">
          <a class="btn icon-md nav-item  p-0 " href="#" >
            <img class=" avatar-img  rounded-circle " src="../assets/photo/faker.jpg" alt="">
          </a>
          <a class="nav-item ms-2" href="#">杨新宇</a>
          <a class="text-secondary small nav-item ms-2 ">2022-09-22 02:28:05</a>
          <!--            <button type="button" class="text-white badge h-40px col-1 w-auto  btn-dark rounded">Spring</button>-->
        </div>

        <div class=" animate__fadeIn animate__animated  p-2 ">

          <!--            博客内容-->
          <article class="blog-post mt-3 ">
            <h1 id="t0" class="mb-4">Spring笔记</h1>
            <h2 id="t1">一、简介</h2>
            <p>
              javascript字符串转换成utf-8编码方式有：1、支持window.TextEncoder()的情况，语法“TextEncoder('utf8');”
              2、利用encodeURI的编码进行替换，语法“encodeURI(字符串)”。</p>
            <div class="bd-clipboard">
              <button class="btn-clipboard " href="#">复制</button>
            </div>
<!--            <pre><code class="language-java rounded" v-text="code"></code></pre>-->
            <h2 id="t2">二、引用样式</h2>
            <p>This is an example blockquote in action:</p>

            <p class="blockquote">Quoted text goes here.</p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <h3 id="exL">2.1、示例列表</h3>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout. This is an example unordered
              list:</p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>And this is an ordered list:</p>
            <ol>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ol>
            <p>And this is a definition list:</p>
            <dl>
              <dt>HyperText Markup Language (HTML)</dt>
              <dd>The language used to describe and define the content of a Web page</dd>
              <dt>Cascading Style Sheets (CSS)</dt>
              <dd>Used to describe the appearance of Web content</dd>
              <dt>JavaScript (JS)</dt>
              <dd>The programming language used to build advanced Web sites and applications</dd>
            </dl>
            <h2 id="t3">三、内联标签</h2>
            <p>HTML defines a long list of available inline tags, a complete list of which can be found
              on
              the
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer
                Network</a>.</p>
            <ul>
              <li><strong>To bold text</strong>, use <code
                  class="language-plaintext ">&lt;strong&gt;</code>.
              </li>
              <li><em>To italicize text</em>, use <code
                  class="language-plaintext">&lt;em&gt;</code>.
              </li>
              <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use
                <code
                    class="language-plaintext ">&lt;abbr&gt;</code>, with an
                optional
                <code
                    class="language-plaintext ">title</code> attribute for the
                full
                phrase.
              </li>
              <li>Citations, like <cite>— Mark Otto</cite>, should use <code
                  class="language-plaintext ">&lt;cite&gt;</code>.
              </li>
              <li>
                <del>Deleted</del>
                text should use <code
                  class="language-plaintext highlighter-rouge">&lt;del&gt;</code>
                and
                <ins>inserted</ins>
                text should use <code
                  class="language-plaintext ">&lt;ins&gt;</code>.
              </li>
              <li>Superscript <sup>text</sup> uses <code
                  class="language-plaintext ">&lt;sup&gt;</code>
                and subscript <sub>text</sub> uses <code
                    class="language-plaintext ">&lt;sub&gt;</code>.
              </li>
            </ul>
            <p>Most of these elements are styled by browsers with few modifications on our part.</p>
            <h2 id="t4">四、标题</h2>
            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <h3 id="t5">4.1、副标题</h3>
            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <pre><code>Example code block</code></pre>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout.</p>


            <h2 id="t6" class="blog-post-title">五、另一篇博客</h2>

            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <blockquote>
              <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the
                middle of
                it.
              </p>
            </blockquote>
            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <h3 id="t7">5.1、示例表格</h3>
            <p>And don't forget about tables in these posts:</p>
            <table class="table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
              </tfoot>
            </table>

            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout.</p>

            <h2 id="t8" class="blog-post-title">六、新功能</h2>
            <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the
              available
              space and show how a longer snippet of text affects the surrounding content. We'll
              repeat it
              often to keep the demonstration flowing, so be on the lookout for this exact same string
              of
              text.</p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of
              the
              other highly repetitive body text used throughout.</p>
          </article>


        </div>
        <news-like-and-comment star="123" like="344" comment="899"></news-like-and-comment>
      </div>


      <div class="col-lg-3  mt-0 ">
        <div class="position-sticky" style="top: 5rem;padding-left: 1rem">
          <div class="text-dark text-center border-bottom-1 mb-2 h6">目录</div>
          <li class="dropdown-divider"></li>
          <div class="js-toc float-start link-dark text-dark mb-2"></div>
        </div>
      </div>

    </div>

    <to-top></to-top>
  </main>
  <NewsFooter class="mt-5"></NewsFooter>
</template>


<script>
import toTop from "@/components/toTop.vue";
import Plyr from 'plyr/dist/plyr'
import $ from 'jquery/dist/jquery.min'
import tocbot from "tocbot";
import NewsLikeAndComment from "@/components/newsLikeAndComment.vue";
import Header from '@/components/common/Header.vue'
import NewsFooter from "@/components/common/NewsFooter.vue";
import InfoHeader from "@/components/common/InfoHeader.vue";

export default {
  name: "NewsInfo",
  components: {
    InfoHeader,
    NewsFooter,
    Header,
    NewsLikeAndComment,
    toTop,
  },
  data() {
    return {
      newId:null,
    }
  },
  methods: {},
  mounted() {

    // const route = useRoute()
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    let newId = this.$route.query.newsId
    this.newId = newId
    console.log('新闻的id是',newId)
    document.title = $("#t0").text()


    $("#sqmh").removeClass('active')
    // $("header").load("/static/user/userHeader.html");
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3,h4',
      // For headings inside relative or absolute positioned containers within content.
      // hasInnerContainers: true,
      // 连接的class
      activeListClass: 'link-dark',
      // activeListItemClass: 'text-primary',
      collapseDepth: 6,


      // Only takes affect when `tocSelector` is scrolling,
// keep the toc scroll position in sync with the content.
//         disableTocScrollSync: true
    });

    // const players = Plyr.setup('.player',
    //     {
    //       i18n: {
    //         speed: '速度',
    //         normal: '正常',
    //       }
    //     });

  }
}
</script>

<style scoped>

p{
  margin-left: 13px;
}
.bi {
  vertical-align: -.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle-nav a {
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}



li::marker {
  list-style: none;
}


</style>