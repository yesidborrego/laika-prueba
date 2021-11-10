<template>
  <div>
    <h1 class="d-none">Laika Mascotas</h1>
    <div class="font_causten_round_semi_bold_oblique">
      <input type="hidden" id="detail_product_ref" value="true">

      <div class="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-10 m-auto px-3 px-sm-4 px-md-0 px-xl-0" >
        <div class="row shadow-sm pt-0 pb-3 mx-3 mb-5 mt-3 bg-white rounded" id="product_detail">
					<div class="col-md-6 col-lg-6 col-xl-6">
            <span id="product_out_of_stock_detail_1827"></span>
					  <div class="text-center mb-2">
						  <div style="margin: 0px auto;">
							  <input type="checkbox" id="zoomCheckPrincipal" class="checkImg" style="display: none;">
							  <label></label>
							  <label for="zoomCheckPrincipal">
                  <span class="badge badge_card_product" id="dog_reference_promotion_">
									  <img src="https://laika.com.co/assets/star.svg" width="70" class="lazy">
                    <div class="text_badge_product_card_top" id="dog_value_reference_promotion_" style="top: 47%; font-size: 20px;">{{ product.discount }}%</div>
                    <div class="font_nova_bold text_badge_product_card_bottom" style="display: none;">DESCUENTO</div>
								  </span>
									<img :src="product.image" :alt="product.name" style="max-height: 300px;" id="img_product_detail_main" class="img-fluid rounded lazy" >
								</label>
						  </div>
					  </div>
					  <div class="text-center font_airbnb_book font-10">
						  <span class="fa fa-search-plus fa-lg mr-1"></span>
              <span style="color:#707070;">Haga clic para abrir la vista expandida</span>
					  </div>
				  </div>
          <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4 pt-4">
            <div class="font_nova_semibold">
              <h2 class="text_product_card mt-2 mb-2" id="name_product_detail" style="color:rgba(2, 0, 5, 0.65);" data-toggle="tooltip" data-placement="top" :title="product.name">{{ product.name }}</h2>
              <span style="color: #3e82f7; font-size: 15px;">
                <b>Marca:</b> <span id="brand_prod_detail" v-text="product.brand"></span>
                <input type="hidden" id="category_prod_detail" value="Snacks">
                <input type="hidden" id="category_prod_id" value="2">
                <input type="hidden" id="subcategory_prod_detail" value="Galletas y Snacks">
                <input type="hidden" id="subcategory_prod_detail_id" value="204">
                <input type="hidden" id="brand_prod_detail_id" value="161">
              </span>
              <p class="font-15 font_nova_semibold" style="margin-bottom: 0px; margin-top: 0px;">
                <i
                  v-for="(star, index) of product.stars" :key="index"
                  class="fa-xs fa fa-star card_star">
                </i>
              </p>
            </div>
					  <span id="price_products_detail_1827">
              <div class="ml-auto mr-auto bg-white" style="padding-right: 32px;">
								<div class="card_products ml-0 mt-1 mr-3">
									<input type="hidden" id="id_prod_detail" value="1827">
									<div class="font_nova_semibold" style="font-size: 10px;">
									  <small style="color: #5d5a5a;font-size:12px!important;">
                      Precio normal
                    </small>
                    <p class="h6 text_product_card mb-0" style="color:#5d5a5a;">
                      <span id="price_detail_1827" style="color: #242424;font-size:30px;">${{ product.price }}</span>
											<span class="ml-4 mt-1 text_old_product">Antes
                        <br>
                        <strike class="text_old_price" id="price_old_detail_1827" >${{ product.price_old }}</strike>
                      </span>
										</p>
                  </div>
                </div>
							</div>
							<hr class="line_membership mb-0 mt-2">

							<div class="">
								<span class="row m-0">
									<div style="color:#bc2f10;font-size: 30px;display: grid;" class="mr-3 font_nova_semibold price_laika_member_adquire">
										<span class="font-14 " style="color:#707070; margin-bottom: -7px;">Precio para</span>
										<span class=" mr-2 detail_price_laika_member_1827">${{ product.price_member }} </span>
									</div>
									<span style="display: grid" class="adquire_laika_member_btn">
										<img width="100" class="ml-1 lazy" style="align-self: stretch;" src="https://laika.com.co/assets/laikamemeber.svg">
										<button @click="open_popup_laikamember" class="font-12 shadow btn_member" style="padding: 0px 7px;border:0;vertical-align: text-top;">ADQUIÉRELA YA</button>
									</span>
								</span>
							</div>
						</span>
					  <div>
						  <div class="font-14 font_nova_semibold mb-2 mt-2 color_black d-flex">
							  <small style="font-size: 100%; " class="quantity_price mr-2  ">
                  Cantidad:
                </small>
                <b class="font_causten_round_semi_bold_oblique" id="status_general_details_1827" style="  color: #242424; ">
                  DISPONIBLE
							  </b>
						  </div>
							<div class="height_detail_product_prices d-none"></div>
							  <small class="font_nova_semibold" style="color: #242424;font-size: 17px !important;">
								  Seleccione su referencia
						    </small>
						    <div class="custom-radio-button pt-2 custom-radio-button-scroll">
                  <div v-for="(detail) in product.details" :key="detail.id">
										<input type="hidden" id="reference_product_detail_hidden" :value="product.name">
										<input type="hidden" id="reference_product_detail_hidden_id" value="1827">
                    <input type="radio" :value="detail.name" :name="detail.name" :id="detail.id" required>
                    <span class="text_quantity_product text_overflow_1_line" :title="detail.name">
                      <label :for="detail.selected" @click="change_button_stock(detail.id, product.id)" :class="[detail.selected ? 'bg_purple text-white' : '']">
                        {{ detail.name }}
                      </label>
                    </span>
                  </div>
								</div>
					    </div>
				    </div>

				  <div class="d-none  shadow-none p-3 mb-5 rounded add_cart_quantity_spent" >
  					<button @click="send_global_notification" id="notify_detail_11400" class="container_notify_1827 bg_purple_soft color_white d-flex padding_notification_active btn font_causten_round_medium_oblique font-12 mt-2">
              <i class="far fa-bell font-15 mr-2 align-self-center"></i>
              <div class="text-left">Notificarme cuando esté disponible</div>
            </button>
          </div>
          <div class="d-none d-md-block shadow-none p-3 mb-5 bg-light rounded add_cart_quantity_resp">
            <div class="text-left">
              <span class="font_airbnb_book font-10 ml-1" style="font-size: 12px;color:rgba(2, 0, 5, 0.65);">Cantidad</span>
            </div>
					  <div class="d-block mt-2 bg_white" >
              <div class="d-inline-block mr-1">
			  				<button class="btn_product_detail_remove" style="height: 35px; width: 35px;font-size: 28px;" @click="remove"><p class="text_cart_add" style="font-size: 28px;">-</p></button>
				  		</div>
					  	<div class="d-inline-block product_detail_add" v-cloak>
						  	<span class="text-center color_purple font_nova_semibold font-10" style="font-size: 20px;">{{ quantity }}</span>
						  </div>
						  <div class="d-inline-block ml-1">
							  <button class="btn_product_detail_add"  style="height: 35px; width: 35px; font-size: 28px;" @click="add"><p class="text_cart_add" style="font-size: 28px;">+</p></button>
						  </div>
            </div>
            <button class="btn bg_purple color_white font_nova_semibold font-8 mt-2" id="btn_general_details_1827" style="width:100%;font-size: 11px; white-space: nowrap;" @click="add_cart_detail">
              Agregar al carrito
            </button>
				  </div>
				  <div class="shadow d-sm-flex d-md-none bg_purple   d-flex background_responsive_add_cart">
            <div style="margin: 0 auto;padding: 15px;width: 100%;align-self: center;text-align: center;" id="quantity_status_resp" class="d-block">
              <div class="d-block" >
                <div class="d-none d-md-none with_quantity_cart">
                  <div class="d-inline-block">
                    <button class="btn_product_detail_remove" style="height: 35px; width: 35px;font-size: 28px;" @click="remove_item_product_detail('detail',{&quot;id&quot;:1827,&quot;name&quot;:&quot;Galletas De Cordero Y Arroz Laika By Rausch&quot;,&quot;slug&quot;:&quot;galletas-de-cordero-y-arroz-laika-by-rausch&quot;,&quot;is_available&quot;:true,&quot;benefit&quot;:&quot;Galletas combinadaspara aquellos que tienen a todas por favoritas.&quot;,&quot;feature&quot;:&quot;Galletas con prote\u00edna - licencia deventa ica 13592 al. Composici\u00f3n garantizada: humedad m\u00e1x 23.2%, prote\u00edna m\u00edn 20.9%, grasa min. 5.1%, fibra max 0,8%. Cenizas max. 1.9%    \nGalletas con verduras y hortalizas - licencia de venta ica 13563 al. Composici\u00f3n garantizada: humedad m\u00e1x 10.5%, prote\u00edna m\u00edn 14%, grasa min. 3.6%, fibra max 2.2%. Cenizas max. 1.5%&quot;,&quot;description&quot;:&quot;Galletas de cordero y arroz laika by rausch, Incluye una unidad por receta. (pollo, h\u00edgado de pollo, cordero y arroz, ternera, verduras y hortalizas, cerdo, miel y ar\u00e1ndanos).&quot;,&quot;slug_pet&quot;:&quot;dog&quot;,&quot;brand&quot;:{&quot;id&quot;:161,&quot;name&quot;:&quot;LAIKA&quot;},&quot;subcategory&quot;:{&quot;id&quot;:204,&quot;name&quot;:&quot;Galletas y Snacks&quot;},&quot;category&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;Snacks&quot;},&quot;references&quot;:[{&quot;id&quot;:11400,&quot;sku&quot;:&quot;29534752157&quot;,&quot;reference&quot;:&quot;150 GR&quot;,&quot;sale_price&quot;:6990,&quot;price_with_discount&quot;:6291,&quot;stock&quot;:216,&quot;show_first&quot;:true,&quot;is_member&quot;:false,&quot;status_id&quot;:1,&quot;can_request_notification&quot;:true,&quot;saving_member&quot;:559,&quot;laika_member&quot;:{&quot;membership&quot;:{&quot;id&quot;:7,&quot;name&quot;:&quot;Membres\u00eda Laika&quot;,&quot;benefits&quot;:&quot;15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio&quot;,&quot;value&quot;:&quot;50000&quot;,&quot;image&quot;:&quot;https:\/\/laikapp.s3.amazonaws.com\/dev_images_general\/162931482916185897721615506516membresia.png&quot;,&quot;acquired&quot;:null,&quot;final_date&quot;:null,&quot;start_date&quot;:null,&quot;total_monthly_savings_member&quot;:null,&quot;total_savings_member&quot;:0,&quot;value_monthly&quot;:4167,&quot;kit&quot;:{&quot;id&quot;:6077,&quot;name&quot;:&quot;MEMBER KIT&quot;,&quot;sale_price&quot;:null,&quot;references&quot;:[{&quot;id&quot;:18859,&quot;product_id&quot;:null,&quot;sale_price&quot;:0,&quot;price_with_discount&quot;:0,&quot;kit_membership&quot;:null,&quot;stock&quot;:850,&quot;reference_images&quot;:[{&quot;url&quot;:&quot;https:\/\/laikapp.s3.amazonaws.com\/dev_images_products\/18859_60527_LAIKA_BOX_MEMBRES__A_1615402575_500x500.jpg&quot;}]}],&quot;brand&quot;:null,&quot;subcategory&quot;:null,&quot;category&quot;:null},&quot;membership_variables&quot;:[{&quot;variable&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;% de descuento en todos los productos para tu peludo&quot;},&quot;variable_id&quot;:1,&quot;value&quot;:&quot;15&quot;,&quot;is_primary&quot;:1},{&quot;variable&quot;:{&quot;id&quot;:22,&quot;name&quot;:&quot;Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo&quot;},&quot;variable_id&quot;:22,&quot;value&quot;:&quot;0&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:12,&quot;name&quot;:&quot;% de descuento en veterinario a domicilio&quot;},&quot;variable_id&quot;:12,&quot;value&quot;:&quot;15&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos&quot;},&quot;variable_id&quot;:6,&quot;value&quot;:&quot;0&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:0,&quot;name&quot;:&quot;Domicilio&quot;},&quot;variable_id&quot;:0,&quot;value&quot;:&quot;120000&quot;,&quot;is_primary&quot;:1}]},&quot;price&quot;:5732},&quot;reference_images&quot;:[{&quot;url&quot;:&quot;https:\/\/s3.us-east-1.amazonaws.com\/laikapp\/images_products\/1_3205__Galletas_de_Cordero_y_arroz_Laika_by_Rausch_500X500.jpg&quot;}],&quot;promotion&quot;:{&quot;id&quot;:301639,&quot;value&quot;:10},&quot;membership&quot;:null}]})"><p class="text_cart_add" style="font-size: 28px;">-</p></button>
                  </div>
                  <div class="d-inline-block product_detail_add" style="vertical-align: unset;width:35%">
                    <span class="text-center color_white font_nova_semibold font-10 " id="price_detail" style="font-size: 20px;"></span>
                  </div>
                  <div class="d-inline-block">
                    <button class="btn_product_detail_add"  style="height: 35px; width: 35px; font-size: 28px;" @click="add_cart_detail_responsive('detail', {&quot;id&quot;:1827,&quot;name&quot;:&quot;Galletas De Cordero Y Arroz Laika By Rausch&quot;,&quot;slug&quot;:&quot;galletas-de-cordero-y-arroz-laika-by-rausch&quot;,&quot;is_available&quot;:true,&quot;benefit&quot;:&quot;Galletas combinadaspara aquellos que tienen a todas por favoritas.&quot;,&quot;feature&quot;:&quot;Galletas con prote\u00edna - licencia deventa ica 13592 al. Composici\u00f3n garantizada: humedad m\u00e1x 23.2%, prote\u00edna m\u00edn 20.9%, grasa min. 5.1%, fibra max 0,8%. Cenizas max. 1.9%    \nGalletas con verduras y hortalizas - licencia de venta ica 13563 al. Composici\u00f3n garantizada: humedad m\u00e1x 10.5%, prote\u00edna m\u00edn 14%, grasa min. 3.6%, fibra max 2.2%. Cenizas max. 1.5%&quot;,&quot;description&quot;:&quot;Galletas de cordero y arroz laika by rausch, Incluye una unidad por receta. (pollo, h\u00edgado de pollo, cordero y arroz, ternera, verduras y hortalizas, cerdo, miel y ar\u00e1ndanos).&quot;,&quot;slug_pet&quot;:&quot;dog&quot;,&quot;brand&quot;:{&quot;id&quot;:161,&quot;name&quot;:&quot;LAIKA&quot;},&quot;subcategory&quot;:{&quot;id&quot;:204,&quot;name&quot;:&quot;Galletas y Snacks&quot;},&quot;category&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;Snacks&quot;},&quot;references&quot;:[{&quot;id&quot;:11400,&quot;sku&quot;:&quot;29534752157&quot;,&quot;reference&quot;:&quot;150 GR&quot;,&quot;sale_price&quot;:6990,&quot;price_with_discount&quot;:6291,&quot;stock&quot;:216,&quot;show_first&quot;:true,&quot;is_member&quot;:false,&quot;status_id&quot;:1,&quot;can_request_notification&quot;:true,&quot;saving_member&quot;:559,&quot;laika_member&quot;:{&quot;membership&quot;:{&quot;id&quot;:7,&quot;name&quot;:&quot;Membres\u00eda Laika&quot;,&quot;benefits&quot;:&quot;15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio&quot;,&quot;value&quot;:&quot;50000&quot;,&quot;image&quot;:&quot;https:\/\/laikapp.s3.amazonaws.com\/dev_images_general\/162931482916185897721615506516membresia.png&quot;,&quot;acquired&quot;:null,&quot;final_date&quot;:null,&quot;start_date&quot;:null,&quot;total_monthly_savings_member&quot;:null,&quot;total_savings_member&quot;:0,&quot;value_monthly&quot;:4167,&quot;kit&quot;:{&quot;id&quot;:6077,&quot;name&quot;:&quot;MEMBER KIT&quot;,&quot;sale_price&quot;:null,&quot;references&quot;:[{&quot;id&quot;:18859,&quot;product_id&quot;:null,&quot;sale_price&quot;:0,&quot;price_with_discount&quot;:0,&quot;kit_membership&quot;:null,&quot;stock&quot;:850,&quot;reference_images&quot;:[{&quot;url&quot;:&quot;https:\/\/laikapp.s3.amazonaws.com\/dev_images_products\/18859_60527_LAIKA_BOX_MEMBRES__A_1615402575_500x500.jpg&quot;}]}],&quot;brand&quot;:null,&quot;subcategory&quot;:null,&quot;category&quot;:null},&quot;membership_variables&quot;:[{&quot;variable&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;% de descuento en todos los productos para tu peludo&quot;},&quot;variable_id&quot;:1,&quot;value&quot;:&quot;15&quot;,&quot;is_primary&quot;:1},{&quot;variable&quot;:{&quot;id&quot;:22,&quot;name&quot;:&quot;Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo&quot;},&quot;variable_id&quot;:22,&quot;value&quot;:&quot;0&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:12,&quot;name&quot;:&quot;% de descuento en veterinario a domicilio&quot;},&quot;variable_id&quot;:12,&quot;value&quot;:&quot;15&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos&quot;},&quot;variable_id&quot;:6,&quot;value&quot;:&quot;0&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:0,&quot;name&quot;:&quot;Domicilio&quot;},&quot;variable_id&quot;:0,&quot;value&quot;:&quot;120000&quot;,&quot;is_primary&quot;:1}]},&quot;price&quot;:5732},&quot;reference_images&quot;:[{&quot;url&quot;:&quot;https:\/\/s3.us-east-1.amazonaws.com\/laikapp\/images_products\/1_3205__Galletas_de_Cordero_y_arroz_Laika_by_Rausch_500X500.jpg&quot;}],&quot;promotion&quot;:{&quot;id&quot;:301639,&quot;value&quot;:10},&quot;membership&quot;:null}]})"><p class="text_cart_add" style="font-size: 28px;">+</p></button>
                  </div>
                </div>
                <button class="d-none d-md-none text_overflow_1_line btn bg_purple color_white font_nova_semibold font-8 mt-0 mb-0 without_quantity_cart" id="btn_general_details_responsive_1827"  @click="add_cart_detail_responsive('detail', {&quot;id&quot;:1827,&quot;name&quot;:&quot;Galletas De Cordero Y Arroz Laika By Rausch&quot;,&quot;slug&quot;:&quot;galletas-de-cordero-y-arroz-laika-by-rausch&quot;,&quot;is_available&quot;:true,&quot;benefit&quot;:&quot;Galletas combinadaspara aquellos que tienen a todas por favoritas.&quot;,&quot;feature&quot;:&quot;Galletas con prote\u00edna - licencia deventa ica 13592 al. Composici\u00f3n garantizada: humedad m\u00e1x 23.2%, prote\u00edna m\u00edn 20.9%, grasa min. 5.1%, fibra max 0,8%. Cenizas max. 1.9%    \nGalletas con verduras y hortalizas - licencia de venta ica 13563 al. Composici\u00f3n garantizada: humedad m\u00e1x 10.5%, prote\u00edna m\u00edn 14%, grasa min. 3.6%, fibra max 2.2%. Cenizas max. 1.5%&quot;,&quot;description&quot;:&quot;Galletas de cordero y arroz laika by rausch, Incluye una unidad por receta. (pollo, h\u00edgado de pollo, cordero y arroz, ternera, verduras y hortalizas, cerdo, miel y ar\u00e1ndanos).&quot;,&quot;slug_pet&quot;:&quot;dog&quot;,&quot;brand&quot;:{&quot;id&quot;:161,&quot;name&quot;:&quot;LAIKA&quot;},&quot;subcategory&quot;:{&quot;id&quot;:204,&quot;name&quot;:&quot;Galletas y Snacks&quot;},&quot;category&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;Snacks&quot;},&quot;references&quot;:[{&quot;id&quot;:11400,&quot;sku&quot;:&quot;29534752157&quot;,&quot;reference&quot;:&quot;150 GR&quot;,&quot;sale_price&quot;:6990,&quot;price_with_discount&quot;:6291,&quot;stock&quot;:216,&quot;show_first&quot;:true,&quot;is_member&quot;:false,&quot;status_id&quot;:1,&quot;can_request_notification&quot;:true,&quot;saving_member&quot;:559,&quot;laika_member&quot;:{&quot;membership&quot;:{&quot;id&quot;:7,&quot;name&quot;:&quot;Membres\u00eda Laika&quot;,&quot;benefits&quot;:&quot;15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio&quot;,&quot;value&quot;:&quot;50000&quot;,&quot;image&quot;:&quot;https:\/\/laikapp.s3.amazonaws.com\/dev_images_general\/162931482916185897721615506516membresia.png&quot;,&quot;acquired&quot;:null,&quot;final_date&quot;:null,&quot;start_date&quot;:null,&quot;total_monthly_savings_member&quot;:null,&quot;total_savings_member&quot;:0,&quot;value_monthly&quot;:4167,&quot;kit&quot;:{&quot;id&quot;:6077,&quot;name&quot;:&quot;MEMBER KIT&quot;,&quot;sale_price&quot;:null,&quot;references&quot;:[{&quot;id&quot;:18859,&quot;product_id&quot;:null,&quot;sale_price&quot;:0,&quot;price_with_discount&quot;:0,&quot;kit_membership&quot;:null,&quot;stock&quot;:850,&quot;reference_images&quot;:[{&quot;url&quot;:&quot;https:\/\/laikapp.s3.amazonaws.com\/dev_images_products\/18859_60527_LAIKA_BOX_MEMBRES__A_1615402575_500x500.jpg&quot;}]}],&quot;brand&quot;:null,&quot;subcategory&quot;:null,&quot;category&quot;:null},&quot;membership_variables&quot;:[{&quot;variable&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;% de descuento en todos los productos para tu peludo&quot;},&quot;variable_id&quot;:1,&quot;value&quot;:&quot;15&quot;,&quot;is_primary&quot;:1},{&quot;variable&quot;:{&quot;id&quot;:22,&quot;name&quot;:&quot;Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo&quot;},&quot;variable_id&quot;:22,&quot;value&quot;:&quot;0&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:12,&quot;name&quot;:&quot;% de descuento en veterinario a domicilio&quot;},&quot;variable_id&quot;:12,&quot;value&quot;:&quot;15&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos&quot;},&quot;variable_id&quot;:6,&quot;value&quot;:&quot;0&quot;,&quot;is_primary&quot;:2},{&quot;variable&quot;:{&quot;id&quot;:0,&quot;name&quot;:&quot;Domicilio&quot;},&quot;variable_id&quot;:0,&quot;value&quot;:&quot;120000&quot;,&quot;is_primary&quot;:1}]},&quot;price&quot;:5732},&quot;reference_images&quot;:[{&quot;url&quot;:&quot;https:\/\/s3.us-east-1.amazonaws.com\/laikapp\/images_products\/1_3205__Galletas_de_Cordero_y_arroz_Laika_by_Rausch_500X500.jpg&quot;}],&quot;promotion&quot;:{&quot;id&quot;:301639,&quot;value&quot;:10},&quot;membership&quot;:null}]})" style="width: 100%;padding: 1.5px;font-size: 15px;white-space: nowrap;opacity: 1;">
                  Agregar
                </button>
              </div>
            </div>
          </div>

				  <div class="offset-md-0 col-md-12 offset-lg-6 col-lg-6 mt-1 info_products_resp_det">
            <div class="ml-0 mt-3">
              <span class="font_nova_semibold" style="color: rgb(36, 36, 36); font-size: 17px;">
                <img src="https://laika.com.co/assets/food.svg" width="16px ">
                <span class="ml-2">
                  Información de producto
                </span>
              </span>
            </div>
            <div class="ml-0 mt-3" style="min-width: 97%;">
              <nav class="font-16">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-link active" id="nav-descripcion-tab" data-toggle="tab" href="#nav-descripcion" role="tab" aria-controls="nav-descripcion" aria-selected="true">Beneficios</a>
                  <a class="nav-link" id="nav-ingredientes-tab" data-toggle="tab" href="#nav-ingredientes" role="tab" aria-controls="nav-ingredientes" aria-selected="false">Características</a>
                  <a class="nav-link" id="nav-informacion-tab" data-toggle="tab" href="#nav-informacion" role="tab" aria-controls="nav-informacion" aria-selected="false">Descripción</a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active overflow_spent p-3 " id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab">
                  {{ product.benefits }}
                </div>
                <div class="tab-pane fade overflow_spent p-3" id="nav-ingredientes" role="tabpanel" aria-labelledby="nav-ingredientes-tab">
                  {{ product.features }}
                </div>
                <div class="tab-pane fade overflow_spent p-3" id="nav-informacion" role="tabpanel" aria-labelledby="nav-informacion-tab">
                  {{ product.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import laikaApi from '../api/laikaApi'
  import Spinner from '../components/spinner.vue'

  export default {
    name: 'ProductDetail',
    props: {
      id: {
        type: Number,
        requerid: true
      }
    },
    components: {
      Spinner
    },
    data() {
      return {
        quantity: 1,
        product: {},
        isLoading: false,
        productId: null
      }
    },
    created() {
      this.getProduct()
    },
    methods: {
      async getProduct() {
        this.isLoading = true
        try {
          this.getIdProduct()
          const { data } = await laikaApi.get(`/products/${this.productId}`)
          this.product = data.data
          this.isLoading = false
        } catch (error) {
          console.log(error)
        }
      },
      add() {
        this.quantity = this.quantity + 1
      },
      remove() {
        if (this.quantity > 1 ) this.quantity =  this.quantity - 1
      },
      add_cart_detail() {
        console.log('add_cart_detail')
      },
      open_popup_laikamember() {
        console.log('open_popup_laikamember')
      },
      change_button_stock(detailId) {
        for (const detail of this.product.details) {
          detail.selected = (detail.id === detailId)
        }
      },
      send_global_notification() {
        console.log('send_global_notification')
      },
      getIdProduct() {
        this.productId = localStorage.getItem('laikaApp-productId')
        if(this.id) {
          localStorage.setItem('laikaApp-productId', this.id)
          this.productId = this.id
        }
      }
    }
  }
</script>
