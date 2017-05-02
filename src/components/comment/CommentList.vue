<script>
  import firebase from 'firebase'
  import momentFilter from '@/filters/momentFilter'
  import moment from 'moment'

  const config = {
    apiKey: 'AIzaSyC4ZtvGIFJEJZVo83-p7_J4xPeKu9ZhwNM',
    authDomain: 'pokedex-96faf.firebaseapp.com',
    databaseURL: 'https://pokedex-96faf.firebaseio.com',
    projectId: 'pokedex-96faf',
    storageBucket: 'pokedex-96faf.appspot.com',
    messagingSenderId: '152826759583'
  }
  let app = firebase.initializeApp(config)
  let db = app.database()

  let commentsRef = db.ref('comments')
  export default {
    name: 'CommentList',
    data () {
      return {
        comment: {
          name: '',
          email: '',
          comment: ''
        }
      }
    },
    filters: {
      momentFilter
    },
    methods: {
      publishComment () {
        this.$validator.validateAll().then(success => {
          if (success) {
            let _comment = this.comment
            _comment.created = moment().toISOString()
            commentsRef.push(_comment)
            this.comment.name = ''
            this.comment.email = ''
            this.comment.comment = ''
            // Vue.nextTick(() => {
            //   this.errors.clear()
            // })
            // Workaround since Vue.nextTick not working
            window.setTimeout(() => {
              this.errors.clear()
            }, 10)
          }
        })
        .catch(() => {
          alert('Fix all errors to continue!')
        })
      }
    },
    firebase: {
      comments: commentsRef.orderByKey()
    }
  }
</script>
<template>
  <div id="comment-list" class="card">
    <div class="card-content">
      <span class="card-title">Comments</span>
      <div v-for="comment in comments" class="comment-item">
        <div class="text">{{ comment.comment }}</div>
        <div class="name">
          {{ comment.name }} 
          <span class="email"><{{ comment.email }}></span>
        </div>
        <div class="date">{{ comment.created | momentFilter }}</div>
      </div>
    </div>
    <div class="card-action">
      Add Comment
      <form @submit.prevent="publishComment()">
        <input name="author" v-model.lazy="comment.name" type="text" placeholder="Author" v-validate data-vv-rules="required">
        <p class="text-danger" v-show="errors.has('author')">{{ errors.first('author') }}</p>

        <input name="email" v-model.lazy="comment.email" type="email" placeholder="Your Email" v-validate data-vv-rules="required|email">
        <p class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>

        <input name="comment" v-model.lazy="comment.comment" type="text" placeholder="Your Comment" v-validate data-vv-rules="required">
        <p class="text-danger" v-show="errors.has('comment')">{{ errors.first('comment') }}</p>

        <button type="submit" class="waves-effect waves-light btn red lighten-2">Comment</button>
      </form>
    </div>
  </div>
</template>
<style scoped lang='scss'>
  .comment-item {
    border-bottom: 1px solid #1e1e1e;
    box-shadow: 0px 1px 2px #1e1e1e;
    margin-bottom: 8px;
    padding: 6px 12px;
    .text {
      display: block;
    }
    .name {
      display: block;
      text-align: right;
      color: #aaa;
      font-size: .9em;
    }
    .email {
    
    }
    .date {
      display: block;
      text-align: right;
      font-size: .8em;
    }
  }
  .text-danger {
    color: red;
    margin: 0;
  }
  .card-action {
    input {
      margin: 0;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
    button {
      margin-top: 20px;
    }
  }
</style>
