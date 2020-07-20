new Vue({
  el: '#app',
  data: {
    results: []
  },
  created() {
    axios.get("http://api.nhk.or.jp/v2/pg/now/130/g1.json?key={あなたのAPIキー}")
    .then(response => {
      this.results = {
        previous_title: response.data.nowonair_list.g1.previous.title,
        previous_subtitle: response.data.nowonair_list.g1.previous.subtitle,
        present_title: response.data.nowonair_list.g1.present.title,
        present_subtitle: response.data.nowonair_list.g1.present.subtitle,
        following_title: response.data.nowonair_list.g1.following.title,
        following_subtitle: response.data.nowonair_list.g1.following.subtitle
      }
    })
  }
});