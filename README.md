![cart-ui](https://user-images.githubusercontent.com/31936869/147282637-4c45f85f-8f34-4ad0-b1ca-d1e7f22f3811.jpg)
### ICERIK

Kullanıcıların sepetiteki ürünlerini listelenebildiği, ürünleri silebildiği, ürün adetinde güncelleme yapmaya olanak sağlayan `Vue` uygulaması geliştirilmesidir.
State Management için Vuex kullanılmıştır.

### HTML ve CSS

SCSS ile kodlanıp, CSS metedolojisi ile yazılmıştır.

### `npm run dev`

Uygulamayı development mode da başlatır.<br>
Görüntülemek için: [http://localhost:8080](http://localhost:8080)

UI uygulaması ile beraber, Ürünlerin ve Sepet Özetinin listelenebildiği Moc REST API ([json-server](https://github.com/typicode/json-server)) çalıştırır. <br>
[http://localhost:3004](http://localhost:3004)

Geliştirme esnasında bu API aracılığı ile Ürünleri ve Sepet Özeti listeleyebilir, silebilir, güncelleyebilirsiniz.

```
GET    /cart
GET    /cart/1
PUT    /cart/1
DELETE /cart/1
GET    /summary

```
