## Beymen `Frontend Development Challenge`

### Hedef

"cart-ui.jpg" tasarımına yakın bir çalışma yapılması ve kullanıcıların sepetiteki ürünlerini listelenebildiği, ürünleri silebildiği, ürün adetinde güncelleme yapmaya olanak sağlayan `Vue` uygulaması geliştirilmesi.<br>
Uygulamanın development mode da çalışması `Frontend Development Challenge` kapsamında yeterlidir, deployment beklentisi bulunmamaktadır.<br>
Uygulamanın modern/güncel browserlarda görüntülenebilmesi yeterlidir.<br>


### HTNL ve CSS

SCSS ile kodlaman beklenmektedir. BEM veya Maintable CSS metedolojisi ile yazmanız tercihimizdir.

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

### Not

Proje kapsamında işinizi kolaylaştırabileceğini düşündüğünüz, ihtiyaç duyduğunuz herhangi bir teknolojiyi (Flexbox, Vuex, Bootstrap Grid vb.) kullanmaktan çekinmeyin.
`Frontend Development Challenge` projesinin işlevselliğini yitirmemesi için yaptığınız çalışmayı üçüncü kişilerle paylaşmamanızı rica ederiz.

Pixel Perfect olmasına gerek yoktur.

### İletişim

Soru veya önerileriniz için aşağıdaki email adresine yazabilirsiniz. <br>
naim.dogan@beymen.com
