<template>
  <nav class="sticky-top ">
    <div class="bg_purple pt-2 mr-0 p-0 navbar navbar-expand-xl justify-content-center">
      <div class="container_els_header pb-2 mx-auto">
        <div class="d-flex position-relative mb-1 container_actions_header_main">
          <div class="" style="z-index: 99">
            <button
              @click="() => (this.openMenu = !this.openMenu)"
              id="open_navbar"
              class="navbar-toggler nav_hamburguer_icon_styles"
              type="button"
              data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
            >
              <span class="navbar-toggler-icon mt-2">
                <i
                  :class="[ 'fa-lg', 'mt-1', 'text-white', 'fas', !openMenu ? 'fa-bars' : 'fa-times']">
                </i>
              </span>
            </button>
            <div
              id="mySidebar"
              class="sidebar shadow font_airbnb_book font-15 d-block d-lg-block d-xl-none">
              <span style="" v-for="item in sidebar_items" :key="item.id">
                <div>
                  <a
                    v-if="item.name == 'Cerrar sesión'"
                    @click.prevent="logout()"
                    class="btn btn-link pl-4 pr-4"
                  >
                    <div class="w-100 position-relative py-2 sections_sidebar d-flex">
                      <span class="mr-2 width_icons">
                      </span>
                      <span class="font_nova_semilbold">{{ item.name }}</span>
                      <span class="img_rows_absolute">
                        <i
                          id="arrow_first_level_cat"
                          class="fas fa-chevron-right"
                        ></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    v-if="
                      item.name != 'Gato' &&
                      item.name != 'Perro' &&
                      item.name != 'Cerrar sesión' &&
                      item.name != 'Blog' &&
                      item.name != 'Servicios' &&
                      item.name != 'Promociones'
                    "
                    :href="item.link"
                    class="btn btn-link pl-4 pr-4"
                  >
                    <div class="w-100 position-relative py-2 sections_sidebar d-flex align-items-center">
                      <span class="mr-2 width_icons">
                      </span>
                      <span class="font_nova_semilbold" v-cloak>{{
                        item.name
                      }}</span>
                      <span class="img_rows_absolute">
                        <i
                          id="arrow_first_level_cat"
                          class="fas fa-chevron-right"
                        ></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    v-if="
                      item.name == 'Servicios' || item.name == 'Promociones'
                    "
                    :href="item.link"
                    class="btn btn-link pl-4 pr-4"
                  >
                    <div
                      class="w-100 position-relative py-2 sections_sidebar d-flex align-items-center">
                      <span class="mr-2 width_icons">
                        <img :src="item.src" width="30" />
                      </span>
                      <span class="font_nova_semilbold" v-cloak>{{
                        item.name
                      }}</span>
                      <span class="img_rows_absolute">
                        <i
                          id="arrow_first_level_cat"
                          class="fas fa-chevron-right"
                        ></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    v-if="item.name == 'Blog'"
                    href="https://blog.laika.com.co/"
                    class="btn btn-link pl-4 pr-4"
                  >
                    <div
                      class="w-100 position-relative py-2 sections_sidebar d-flex align-items-center">
                      <span class="mr-2 width_icons">
                        <img :src="item.src" width="30" />
                      </span>
                      <span class="font_nova_semilbold" v-cloak>{{
                        item.name
                      }}</span>
                      <span class="img_rows_absolute">
                        <i
                          id="arrow_first_level_cat"
                          class="fas fa-chevron-right"
                        ></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div id="accordion-cat" v-if="item.name == 'Gato'" v-cloak>
                  <div class="card" style="border: 0">
                    <div
                      class="card-header first_lvl_menu"
                      id="heading-cat-1"
                      style="border: 0; padding: 0"
                    >
                      <a
                        class="btn btn-link pl-4 pr-4"
                        @click="change_arrow_class_first_lvl('cat')"
                        data-toggle="collapse"
                        data-parent="#accordion-dog"
                        data-target="#collapse-cat-1"
                        aria-expanded="true"
                        aria-controls="collapse-cat-1"
                      >
                        <div
                          class="w-100 position-relative py-2 sections_sidebar">
                          <span class="mr-2">
                            <img
                              src="https://laika.com.co/assets/home/cat_mc_s.svg "
                              width="40"
                            />
                          </span>
                          <span class="font_nova_semilbold" v-cloak>{{
                            item.name
                          }}</span>
                          <span class="img_rows_absolute">
                            <i
                              id="arrow_first_level_cat"
                              class="fas fa-chevron-right"
                            ></i>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      id="collapse-cat-1"
                      class="collapse"
                      aria-labelledby="heading-cat-1"
                      data-parent="#accordion-cat"
                    >
                      <div id="accordion-cat-1">
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('cat', 5)"
                              id="aria_cat_5"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_5"
                              aria-controls="collapseTwoCat_5"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Alimento </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_5"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_5"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/alimento/concentrado/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Concentrado</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/alimento/humedo/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Humedo</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/alimento/dietas-naturales/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Dietas naturales</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/alimento/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('cat', 9)"
                              id="aria_cat_9"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_9"
                              aria-controls="collapseTwoCat_9"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_arenas+(1).png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Arenas </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_9"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_9"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/arenas/arenas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Arenas</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/arenas/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('cat', 2)"
                              id="aria_cat_2"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_2"
                              aria-controls="collapseTwoCat_2"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Snacks </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_2"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_2"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/snacks/brownies-y-otros/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Brownies y otros</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/snacks/tortas-de-celebracion/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Tortas de Celebración</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/snacks/galletas-y-snacks/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Galletas y Snacks</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/snacks/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('cat', 32)
                              "
                              id="aria_cat_32"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_32"
                              aria-controls="collapseTwoCat_32"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Farmapet </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_32"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_32"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/antiparasitarios/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antiparasitarios</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/suplementos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Suplementos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/analgesicos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Analgésicos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/antibacterianos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antibacterianos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/antibioticos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antibióticos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/antipulgas-y-garrapatas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antipulgas y Garrapatas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/dermatologicos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Dermatológicos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/digestivos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Digestivos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/hepaticos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Hepáticos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/medicina-homeopatica-y-bienestar/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Medicina Homeopática</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/oftalmicos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Oftálmicos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/farmacia/oticos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Óticos</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/farmacia/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('cat', 30)
                              "
                              id="aria_cat_30"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_30"
                              aria-controls="collapseTwoCat_30"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Cuidado e Higiene </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_30"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_30"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/cuidado-e-higiene/cepillos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cepillos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/cuidado-e-higiene/corta-unas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Corta Uñas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/cuidado-e-higiene/cuidado-hogar/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cuidado Hogar</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/cuidado-e-higiene/cuidado-oral/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cuidado Oral</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/cuidado-e-higiene/higiene/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Higiene</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/cuidado-e-higiene/neutralizadores-de-olor/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Neutralizadores de olor</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/cuidado-e-higiene/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('cat', 26)
                              "
                              id="aria_cat_26"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_26"
                              aria-controls="collapseTwoCat_26"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Juguetes </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_26"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_26"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/juguetes/juguetes/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Juguetes.</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/juguetes/interactivos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Interactivos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/juguetes/peluches-gato/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Peluches Gato</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/juguetes/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('cat', 4)"
                              id="aria_cat_4"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_4"
                              aria-controls="collapseTwoCat_4"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios+(1).png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Accesorios </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_4"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_4"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/halloween/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Halloween</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/collares/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Collares</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/comederos-y-bebederos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Comederos y bebederos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/areneros-y-palas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Areneros y palas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/gimnasios/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Gimnasios</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/rascaderas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Rascaderas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/camas-y-cobijas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Camas y Cobijas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/kits-celebracion/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Kits Celebración</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/guacales/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Guacales</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/plaquitas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Plaquitas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/accesorios/promocion-de-temporada/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Promoción De Temporada</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/accesorios/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-cat-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('cat', 28)
                              "
                              id="aria_cat_28"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoCat_28"
                              aria-controls="collapseTwoCat_28"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613595491Categoria_pet_owner.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Para PetLovers </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_cat_28"
                                  class="inactive_cat fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoCat_28"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-cat-1"
                              aria-labelledby="heading-cat-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/cat/para-amos/accesorios/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Accesorios</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/cat/para-amos/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion-dog" v-if="item.name == 'Perro'" v-cloak>
                  <div class="card" style="border: 0">
                    <div
                      class="card-header first_lvl_menu"
                      id="heading-dog-1"
                      style="border: 0; padding: 0"
                    >
                      <a
                        class="btn btn-link pl-4 pr-4"
                        @click="change_arrow_class_first_lvl('dog')"
                        data-toggle="collapse"
                        data-parent="#accordion-cat"
                        data-target="#collapse-dog-1"
                        aria-expanded="true"
                        aria-controls="collapse-dog-1"
                      >
                        <div
                          class="
                            w-100
                            position-relative
                            py-2
                            sections_sidebar
                          "
                        >
                          <span class="mr-2">
                            <img
                              src="https://laika.com.co/assets/home/dog_mc.svg "
                              width="40"
                            />
                          </span>
                          <span class="font_nova_semilbold">{{
                            item.name
                          }}</span>
                          <span class="img_rows_absolute">
                            <i
                              id="arrow_first_level_dog"
                              class="fas fa-chevron-right"
                            ></i>
                          </span>
                        </div>
                      </a>
                    </div>

                    <div
                      id="collapse-dog-1"
                      class="collapse"
                      aria-labelledby="heading-dog-1"
                      data-parent="#accordion-dog"
                    >
                      <div id="accordion-dog-1">
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('dog', 1)"
                              id="aria_dog_1"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_1"
                              aria-controls="collapseTwoDog_1"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Alimento </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_1"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_1"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/alimento/concentrado/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Concentrado</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/alimento/humedo/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Humedo</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/alimento/dietas-naturales/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Dietas naturales</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/alimento/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('dog', 2)"
                              id="aria_dog_2"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_2"
                              aria-controls="collapseTwoDog_2"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Snacks </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_2"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_2"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/snacks/brownies-y-otros/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Brownies y otros</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/snacks/tortas-de-celebracion/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Tortas de Celebración</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/snacks/huesos-y-carnaza/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Huesos y Carnaza</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/snacks/galletas-y-snacks/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Galletas y Snacks</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/snacks/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('dog', 31)
                              "
                              id="aria_dog_31"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_31"
                              aria-controls="collapseTwoDog_31"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Farmapet </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_31"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_31"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/antiparasitarios/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antiparasitarios</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/suplementos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Suplementos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/analgesicos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Analgésicos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/antibacterianos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antibacterianos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/antibioticos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antibióticos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/antiinflamatorios/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antiinflamatorios</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/antipulgas-y-garrapatas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Antipulgas y Garrapatas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/articulaciones/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Articulaciones</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/collares-isabelinos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Collares Isabelinos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/dermatologicos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Dermatológicos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/digestivos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Digestivos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/hepaticos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Hepáticos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/hipotiroidismo/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Hipotiroidismo</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/medicina-homeopatica-y-bienestar/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Medicina Homeopática</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/oftalmicos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Oftálmicos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/farmacia/oticos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Óticos</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/farmacia/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('dog', 29)
                              "
                              id="aria_dog_29"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_29"
                              aria-controls="collapseTwoDog_29"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Cuidado e Higiene </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_29"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_29"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/cepillos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cepillos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/corta-unas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Corta Uñas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/cuidado-hogar/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cuidado Hogar</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/cuidado-oral/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cuidado Oral</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/protector-vehiculos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Protector Vehículos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/higiene/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Higiene</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/residuos-de-mascotas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Residuos de Mascotas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/cuidado-e-higiene/neutralizadores-de-olor/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Neutralizadores de olor</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/cuidado-e-higiene/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('dog', 25)
                              "
                              id="aria_dog_25"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_25"
                              aria-controls="collapseTwoDog_25"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Juguetes </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_25"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_25"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/juguetes/juguetes/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Juguetes.</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/juguetes/peluches/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Peluches</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/juguetes/cuerdas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Cuerdas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/juguetes/interactivos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Interactivos</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/juguetes/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="change_arrow_class_second_lvl('dog', 4)"
                              id="aria_dog_4"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_4"
                              aria-controls="collapseTwoDog_4"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios+(1).png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Accesorios </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_4"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_4"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/halloween/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Halloween</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/correas-y-traillas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Correas y traillas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/pecheras-y-arnes/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Pecheras y arnes</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/bozales/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Bozales</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/collares/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Collares</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/ropa/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Ropa</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/comederos-y-bebederos/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Comederos y bebederos</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/camas-y-cobijas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Camas y Cobijas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/tapetes/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Tapetes</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/kits-celebracion/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Kits Celebración</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/guacales/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Guacales</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/plaquitas/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Plaquitas</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/accesorios/promocion-de-temporada/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Promoción De Temporada</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/accesorios/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card font_nova_semibold"
                          style="border: 0"
                        >
                          <div
                            class="card-header second_lvl_menu pl-70 pr-4"
                            id="heading-dog-1-1"
                            style="border: 0"
                          >
                            <a
                              class="collapsed btn btn-link position-relative"
                              @click="
                                change_arrow_class_second_lvl('dog', 27)
                              "
                              id="aria_dog_27"
                              data-toggle="collapse"
                              aria-expanded="false"
                              data-target="#collapseTwoDog_27"
                              aria-controls="collapseTwoDog_27"
                            >
                              <span class="mr-3">
                                <img
                                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613595491Categoria_pet_owner.png"
                                  height="30"
                                  alt=""
                                  srcset=""
                                />
                              </span>
                              <span> Para PetLovers </span
                              ><span class="img_rows_absolute"
                                ><i
                                  id="arrow_second_level_dog_27"
                                  class="inactive_dog fas fa-chevron-right"
                                ></i
                              ></span>
                            </a>
                            <div
                              id="collapseTwoDog_27"
                              class="collapse third_lvl_menu"
                              data-parent="#accordion-dog-1"
                              aria-labelledby="heading-dog-1-1"
                            >
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/para-amos/ropa/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Ropa</span>
                              </a>
                              <a
                                class="btn btn-link"
                                href="https://laika.com.co/category/bog/dog/para-amos/accesorios/todos/todo-para-mascota/1"
                                aria-expanded="true"
                                aria-controls=""
                              >
                                <span>Accesorios</span>
                              </a>
                              <a
                                class="btn-link cursor_pointer"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; redirectUrlPreload('category/bog/dog/para-amos/todos/todos/todo-para-mascota/1')"
                                data-cf-modified-b4a383de7a4c3a9a9f4397ef-=""
                              >
                                <span class="all_categories_a">
                                  Ver más
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <!-- Dropdown cities -->
          <div
            class="align-self-center mt-xl-0 user_session"
            id="user_session"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div
              class="
                container_cities
                d-flex
                position-relative
                align-items-center
                mr-3
              "
            >
              <img
                class="img_shortname_resp lazy img_country_layout"
                src=" https://laikapp.s3.amazonaws.com/general/avatar_col.png"
              />
              <span
                class="
                  d-flex
                  font-15
                  align-text-middle
                  short_name_responsive_city
                  color_white
                "
              >
                <div class="text-white d-inline row_container_cities">
                  <span>BOG</span>
                </div>
                <div class="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="height: 6px"
                    width="14.225"
                    height="8.107"
                    viewBox="0 0 14.225 8.107"
                  >
                    <g>
                      <path
                        fill="white"
                        d="M104.955 7.816l-6.116 6.116a1 1 0 1 1-1.409-1.409l5.412-5.412L97.43 1.7A1 1 0 0 1 98.839.292l6.116 6.116a1 1 0 0 1 0 1.408z"
                        transform="rotate(90 7.112 7.113) translate(-97.139)"
                      />
                    </g>
                  </svg>
                </div>
              </span>
              <div
                class="
                  dropdown-menu dropdown-menu-center
                  mt-2
                  dropdown_cities_responsive
                "
              >
                <div
                  class="p-1 mb-1 bg-white text-center ml-auto mr-2"
                  style="width: 95%"
                  id="dropdownCities1"
                >
                  <div class="row" style="overflow: hidden">
                    <div class="col-3 ml-3 mt-1" style="line-height: 0.7">
                      <a href="https://laika.com.co/">
                        <div class="pt-0" style="height: 35px">
                          <img
                            width="35"
                            class="lazy"
                            src="https://laikapp.s3.amazonaws.com/general/avatar_col.png "
                          />
                          <small class="color_purple" style="font-size: 8px"
                            >Colombia</small
                          >
                        </div>
                      </a>
                    </div>
                    <div class="col-8 mt-2" style="margin-top: 10px">
                      <b
                        class="color_petrol_blue text-sm-left"
                        style="font-size: 11px"
                        >Selecciona tu ubicación</b
                      >
                    </div>
                  </div>
                  <div class="row">
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Bogot\u00e1 D.C.',
                            id: 1,
                            phone: '3009108496',
                            slug: 'bog',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Bogotá D.C.</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Medell\u00edn',
                            id: 2,
                            phone: '3009108496',
                            slug: 'med',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Medellín</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Cali',
                            id: 154,
                            phone: '3009108496',
                            slug: 'cali',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Cali</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Bucaramanga',
                            id: 122,
                            phone: '3009108496',
                            slug: 'bucaramanga',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Bucaramanga</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Barranquilla',
                            id: 93,
                            phone: '3009108496',
                            slug: 'Baq',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Barranquilla</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Pereira',
                            id: 659,
                            phone: '3009108496',
                            slug: 'pereira',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Pereira</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Chia\/Cajic\u00e1',
                            id: 3,
                            phone: '3009108496',
                            slug: 'chia',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Chia/Cajicá</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Soacha',
                            id: 920,
                            phone: '3009108496',
                            slug: 'soacha',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Soacha</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Sabaneta',
                            id: 774,
                            phone: '3009108496',
                            slug: 'sabaneta',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Sabaneta</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Envigado',
                            id: 333,
                            phone: '3009108496',
                            slug: 'envigado',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Envigado</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'San Antonio de prado',
                            id: 1107,
                            phone: '3009108496',
                            slug: 'prado',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple"
                          >San Antonio de prado</small
                        >
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Bello',
                            id: 96,
                            phone: '3009108496',
                            slug: 'bello',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Bello</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Caldas',
                            id: 148,
                            phone: '3009108496',
                            slug: 'caldas',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Caldas</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Itag\u00fc\u00ed',
                            id: 440,
                            phone: '3009108496',
                            slug: 'itagui',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Itagüí</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'La Estrella',
                            id: 466,
                            phone: '3009108496',
                            slug: 'la-estrella',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">La Estrella</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Copacabana',
                            id: 242,
                            phone: '3009108496',
                            slug: 'copacabana',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Copacabana</small>
                      </div>
                    </a>
                    <a
                      class="cursor_pointer w-100"
                      @click="
                        validate_city_cart(
                          {
                            name: 'Otra ciudad',
                            id: 4,
                            phone: '3009108496',
                            slug: 'otr',
                          },
                          1
                        )
                      "
                    >
                      <div
                        class="
                          col-10
                          ml-auto
                          mr-auto
                          mt-2
                          mb-1
                          text-center
                          bg-white
                          border
                          rounded
                        "
                      >
                        <small class="color_purple">Otra ciudad</small>
                      </div>
                    </a>
                  </div>
                  <div class="mt-2 mr-auto ml-auto text-center">
                    <small class="text_card_universe"
                      >¿Eres Nuevo?<strong>
                        <span
                          id="redirect_register_modal_2"
                          class="pointer_style cursor_pointer"
                        >
                          Regístrate aquí</span
                        ></strong
                      ></small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Shopping cart -->
          <div
            class="
              user_container_actions
            "
          >
            <div class="dropdown">
              <button
                class="
                  font-13
                  color_white
                  btn btn_login_register
                  d-none d-sm-block d-xl-block
                "
                type="button"
                id="dropdown_options"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-1">Crear cuenta</span>
                <i class="fa fa-angle-down"></i>
              </button>
              <div
                class="
                  circle_bg_profile
                  cursor_pointer
                  d-block d-sm-none d-xl-none
                "
                id="dropdown_options"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="lazy vertical_ab profile_img_width"
                  src="https://laika.com.co/assets/home/profile_mc.svg "
                />
              </div>
              <div
                class="
                  px-2
                  dropdown-menu dropdown-menu-right
                  text-center
                  dropdown_options_user
                "
                aria-labelledby="dropdown_options"
              >
                <button
                  class="
                    br-8
                    w-100
                    mb-1
                    font-13
                    btn
                    mx-auto
                    align-text-middle
                    bg_purple
                    color_white
                  "
                  id="layout_login"
                  data-toggle="modal"
                  data-target="#login"
                  style="cursor: pointer"
                >
                  Iniciar sesión
                </button>
                <div class="font-11 w-100 text-left">
                  ¿Eres nuevo cliente?
                </div>
                <button
                  class="
                    br-8
                    w-100
                    mx-auto
                    btn btn-sm
                    bg-white
                    btn_crear_cuenta
                  "
                  id="layout_createAccount"
                  data-toggle="modal"
                  data-target="#crear_cuenta"
                >
                  Crear cuenta
                </button>
              </div>
            </div>
          </div>

          <div class="header_navbar_small_cart" id="cart_header">
            <div class="btn-group">
              <span
                v-cloak
                class="cursor_pointer"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="openCart"
              >
                <div class="circle_bg_cart">
                  <img
                    class="lazy vertical_at"
                    style="width: 22px"
                    src="https://laika.com.co/assets/home/cart_mc.svg"
                  />
                </div>
                <span class="badge badge_car rounded-circle">
                  {{ count }}
                </span>
              </span>
              <div
                class="dropdown-menu dropdown-menu-right mt-2 dropdown_cart"
                style="background: #fafafa"
              >
                <div
                  class="dropdown-header text-right"
                  style="padding: 0 1.5rem !important"
                >
                  <span
                    style="font-size: 18px; cursor: pointer"
                    class="font_nova_bold color_purple"
                    @click="close()"
                    >X</span
                  >
                </div>
                <div class="dropdown-divider"></div>
                <div
                  style="max-height: 310px; overflow-y: auto"
                  class="ml-1 mr-1 p-3 "
                >
                  <div v-if="!products.length" class="cart-checkout">
                    <p class="mb-0">El carrito está vacio</p>
                  </div>
                  <div v-for="product in products" :key="product.id">
                    <!-- first -->
                    <div
                      class="
                        row
                        col-12
                        ml-auto
                        mr-auto
                        shadow-sm
                        p-1
                        mb-3
                        bg-white
                        rounded
                      "
                      v-if="
                        !product.membership_validation &&
                        !product.kit_membership &&
                        !product.free_sample
                      "
                    >
                      <div class="col-4">
                        <img
                          width="80"
                          style="margin-top: 5px"
                          :src="
                            product.img != null && product.img != undefined
                              ? product.img
                              : ''
                          "
                        />
                      </div>
                      <div class="col-8">
                        <div>
                          <p
                            class="
                              text_card_universe text_overflow_1_line
                              mb-0
                            "
                          >
                            {{ product.name }}
                          </p>
                        </div>
                        <div class="custom-radio-button pt-1 mb-2">
                          <div>
                            <input type="radio" name="250" value="250" />
                            <span
                              class="
                                text_quantity_product text_overflow_1_line
                              "
                              data-toggle="tooltip"
                              data-placement="top"
                              :title="product.reference"
                            >
                              <label
                                for="1"
                                style="
                                  width: 100%;
                                  min-width: 20px;
                                  height: 20px;
                                  line-height: 19px;
                                  font-size: 8px;
                                "
                              >
                                {{ product.reference }}
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="row" style="margin-top: -3px">
                          <div class="col-4">
                            <span class="text_price_cart"
                              >${{
                                new Intl.NumberFormat("es-CO").format(
                                  product.price
                                )
                              }}<br />
                              <strike
                                class="text_old_price_cart"
                                v-if="product.price != product.old_price"
                                >${{
                                  new Intl.NumberFormat("es-CO").format(
                                    product.old_price
                                  )
                                }}</strike
                              >
                            </span>
                          </div>
                          <div class="col-8 text-right d-block">
                            <div class="d-inline-block">
                              <button
                                class="btn_cart_add"
                                @click="
                                  decrease_session(
                                    product,
                                    '',
                                    'Shopping_Cart'
                                  )
                                "
                              >
                                <p class="text_cart_add">-</p>
                              </button>
                            </div>
                            <div class="d-inline-block">
                              <p
                                class="text-center color_purple"
                                style="width: 35px"
                                :key="product.quantity"
                              >
                                {{ product.quantity }}
                              </p>
                            </div>
                            <div class="d-inline-block">
                              <button
                                class="btn_cart_add"
                                @click="
                                  add_product_session(
                                    product,
                                    '',
                                    'Shopping_Cart'
                                  )
                                "
                              >
                                <p class="text_cart_add">+</p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- second laika membership -->
                    <div
                      class="
                        row
                        col-12
                        ml-auto
                        mr-auto
                        shadow-sm
                        p-1
                        mb-3
                        bg-white
                        rounded
                      "
                      v-if="product.membership_validation"
                    >
                      <div class="col-4">
                        <img
                          width="60"
                          style="margin-top: 5px"
                          :src="
                            product.img != 'null'
                              ? product.img
                              : './assets/LAIKA.png'
                          "
                        />
                      </div>
                      <div class="col-8">
                        <div>
                          <p
                            class="
                              text_card_universe text_overflow_1_line
                              mb-0
                            "
                          >
                            {{ product.name }}
                          </p>
                        </div>
                        <div class="row" style="margin-top: -3px">
                          <div class="col-4 mt-3">
                            <span class="text_price_cart"
                              >${{
                                new Intl.NumberFormat("es-CO").format(
                                  product.price
                                )
                              }}<br />
                              <strike
                                class="text_old_price_cart"
                                v-if="product.price != product.old_price"
                                >${{
                                  new Intl.NumberFormat("es-CO").format(
                                    product.old_price
                                  )
                                }}</strike
                              >
                            </span>
                          </div>
                          <div class="col-8 text-right d-block">
                            <button
                              class="btn bg_purple color_white btn_membership"
                              @click="decrease_session(product)"
                            >
                              Descartar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- thrid kit membership -->
                    <div
                      class="
                        row
                        col-12
                        ml-auto
                        mr-auto
                        shadow-sm
                        p-1
                        mb-3
                        bg-white
                        rounded
                      "
                      v-if="
                        !product.membership_validation &&
                        product.kit_membership &&
                        kit_membership_flag
                      "
                    >
                      <div class="col-4">
                        <img
                          width="70"
                          style="margin-top: 5px"
                          :src="
                            product.img != 'null'
                              ? product.img
                              : './assets/LAIKA.png'
                          "
                        />
                      </div>
                      <div class="col-8">
                        <div>
                          <p
                            class="
                              text_card_universe text_overflow_1_line
                              mb-0
                            "
                          >
                            {{ product.name }}
                          </p>
                        </div>
                        <div class="custom-radio-button pt-1 mb-2">
                          <div>
                            <input type="radio" name="250" value="250" />
                            <span
                              class="
                                text_quantity_product text_overflow_1_line
                              "
                              data-toggle="tooltip"
                              data-placement="top"
                              :title="product.reference"
                            >
                              <label
                                for="1"
                                style="
                                  width: 100%;
                                  min-width: 20px;
                                  height: 20px;
                                  line-height: 19px;
                                  font-size: 8px;
                                "
                              >
                                {{ product.reference }}
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="row" style="margin-top: -3px">
                          <div class="col-4">
                            <span
                              class="text_price_cart"
                              v-if="!product.kit_membership"
                              >${{
                                new Intl.NumberFormat("es-CO").format(
                                  product.price
                                )
                              }}<br />
                              <strike
                                class="text_old_price_cart"
                                v-if="product.price != product.old_price"
                                >${{
                                  new Intl.NumberFormat("es-CO").format(
                                    product.old_price
                                  )
                                }}</strike
                              >
                            </span>
                            <div class="text_price_cart" v-else>
                              Gratis<br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- four section free sample -->
                    <div
                      class="
                        row
                        col-12
                        ml-auto
                        mr-auto
                        shadow-sm
                        p-1
                        mb-3
                        bg-white
                        rounded
                      "
                      v-if="product.free_sample"
                    >
                      <div class="col-4">
                        <img
                          width="80"
                          style="margin-top: 5px"
                          :src="
                            product.img != 'null'
                              ? product.img
                              : './assets/LAIKA.png'
                          "
                        />
                      </div>
                      <div class="col-8">
                        <div>
                          <p
                            class="
                              text_card_universe text_overflow_1_line
                              mb-0
                            "
                          >
                            {{ product.name }}
                          </p>
                        </div>
                        <div class="custom-radio-button pt-1 mb-2">
                          <div>
                            <input type="radio" name="250" value="250" />
                            <span
                              class="
                                text_quantity_product text_overflow_1_line
                              "
                              data-toggle="tooltip"
                              data-placement="top"
                              :title="product.reference"
                            >
                              <label
                                for="1"
                                style="
                                  width: 100%;
                                  min-width: 20px;
                                  height: 20px;
                                  line-height: 19px;
                                  font-size: 8px;
                                "
                              >
                                {{ product.reference }}
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="row" style="margin-top: -3px">
                          <div class="col-4">
                            <div class="text_price_cart">Gratis<br /></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="
                        row
                        col-12
                        ml-auto
                        mr-auto
                        shadow-sm
                        p-1
                        mb-3
                        bg-white
                        rounded
                      "
                      v-if="
                        product.membership_validation == true &&
                        product.kit_membership &&
                        !kit_membership_flag &&
                        product.membership.kit != null &&
                        product.membership.kit.id != null
                      "
                    >
                      <div class="col-4">
                        <img
                          width="60"
                          style="margin-top: 5px"
                          :src="'/assets/LAIKA.png'"
                        />
                      </div>
                      <div class="col-8">
                        <div>
                          <p
                            class="
                              text_card_universe text_overflow_1_line
                              mb-0
                            "
                          >
                            {{ product.membership.kit.name }}
                          </p>
                        </div>
                        <div class="custom-radio-button pt-1 mb-2">
                          <div>
                            <input type="radio" name="250" value="250" />
                            <span
                              class="
                                text_quantity_product text_overflow_1_line
                              "
                              data-toggle="tooltip"
                              data-placement="top"
                              :title="product.reference"
                            >
                              <label
                                for="1"
                                style="
                                  width: 100%;
                                  min-width: 20px;
                                  height: 20px;
                                  line-height: 19px;
                                  font-size: 8px;
                                "
                              >
                                Gratis
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <div class="text_price_cart">Gratis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-2" v-if="products.length > 0">
                    <div class="col-12 text-right pr-4">
                      <a
                        class="text_view_all font-15 cursor_pointer"
                        @click="clean_cart()"
                        >Vaciar carrito
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    container_want_save_with_membership
                    mx-3
                    p-2
                    position-relative
                  "
                  v-show="save_membership_validation"
                  v-cloak
                >
                  <div class="d-flex">
                    <img
                      class="mr-2"
                      src="https://laika.com.co/assets/imgs_landing_member/crown.svg"
                      alt=""
                    />
                    <div
                      class="font-12 mr-2 align-self-center"
                      v-show="saving_member_by_product > 0"
                      v-cloak
                    >
                      ¿Quieres ahorrar
                      <span class="text-success"
                        >${{
                          new Intl.NumberFormat("es-CO").format(
                            saving_member_by_product
                          )
                        }}</span
                      >?
                    </div>
                    <div
                      class="font-12 mr-2 align-self-center"
                      v-show="saving_member_by_product == 0"
                      v-cloak
                    >
                      ¿Quieres ahorrar en tus pedidos?
                    </div>
                    <button
                      class="position-absolute btn btn_want_save font-10"
                      @click="
                        open_popup_laikamember(
                          {
                            id: 7,
                            name: 'Membres\u00eda Laika',
                            benefits:
                              '15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio',
                            value: '50000',
                            image:
                              'https:\/\/laikapp.s3.amazonaws.com\/dev_images_general\/162931482916185897721615506516membresia.png',
                            acquired: false,
                            final_date: null,
                            start_date: null,
                            total_monthly_savings_member: null,
                            total_savings_member: 0,
                            value_monthly: 4167,
                            kit: null,
                            membership_variables: [
                              {
                                variable: {
                                  id: 1,
                                  name: '% de descuento en todos los productos para tu peludo',
                                },
                                variable_id: 1,
                                value: '15',
                                is_primary: 1,
                              },
                              {
                                variable: {
                                  id: 22,
                                  name: 'Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo',
                                },
                                variable_id: 22,
                                value: '0',
                                is_primary: 2,
                              },
                              {
                                variable: {
                                  id: 12,
                                  name: '% de descuento en veterinario a domicilio',
                                },
                                variable_id: 12,
                                value: '15',
                                is_primary: 2,
                              },
                              {
                                variable: {
                                  id: 6,
                                  name: 'Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos',
                                },
                                variable_id: 6,
                                value: '0',
                                is_primary: 2,
                              },
                              {
                                variable: { id: 0, name: 'Domicilio' },
                                variable_id: 0,
                                value: '120000',
                                is_primary: 1,
                              },
                            ],
                          },
                          'cart'
                        )
                      "
                    >
                      Ahorra
                    </button>
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                <div class="container_without_delivery_free">
                  <div class="text-center btn_checkout_cart">
                    <a
                      @click="
                        validate_session({
                          id: 1,
                          name: 'Bogot\u00e1 D.C.',
                          text_cvv:
                            'Hola por seguridad y para que tu pedido salga bien necesitamos validar tu c\u00f3digo CVV, este c\u00f3digo no ser\u00e1 almacenado en ning\u00fan lado',
                          phone: '3009108496',
                          whatsapp: '+573009108496',
                          short_name: 'BOG',
                          youtube:
                            'https:\/\/www.youtube.com\/watch?v=gchln4oix68',
                          facebook:
                            'https:\/\/es-la.facebook.com\/LaikaUniverso\/',
                          instagram:
                            'https:\/\/www.instagram.com\/laikamascotas\/?hl=es-la',
                          slug: 'bog',
                          logo_web:
                            'https:\/\/laikapp.s3.amazonaws.com\/general\/logo_laika_co.png',
                          avatar:
                            'https:\/\/laikapp.s3.amazonaws.com\/general\/avatar_col.png',
                          enabled_membership: 1,
                          enabled_billing: 1,
                          blog: 'https:\/\/blog.laika.com.co\/',
                          email: 'servicioclientes@laika.com.co',
                          address_format: 1,
                          nacional: 0,
                          enabled_municipality: false,
                          free_delivery_no_apply:
                            'para que tu env\u00edo sea gratis! *No aplica para pedidos express',
                          free_delivery_apply:
                            '\u00a1Genial! tu env\u00edo es GRATIS, *No aplica pedido express',
                          before_free_delivery_no_apply: '\u00a1Faltan',
                          membership: {
                            id: 7,
                            name: 'Membres\u00eda Laika',
                            benefits:
                              '15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio',
                            value: '50000',
                            image:
                              'https:\/\/laikapp.s3.amazonaws.com\/dev_images_general\/162931482916185897721615506516membresia.png',
                            acquired: false,
                            final_date: null,
                            start_date: null,
                            total_monthly_savings_member: null,
                            total_savings_member: 0,
                            value_monthly: 4167,
                            kit: null,
                            membership_variables: [
                              {
                                variable: {
                                  id: 1,
                                  name: '% de descuento en todos los productos para tu peludo',
                                },
                                variable_id: 1,
                                value: '15',
                                is_primary: 1,
                              },
                              {
                                variable: {
                                  id: 22,
                                  name: 'Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo',
                                },
                                variable_id: 22,
                                value: '0',
                                is_primary: 2,
                              },
                              {
                                variable: {
                                  id: 12,
                                  name: '% de descuento en veterinario a domicilio',
                                },
                                variable_id: 12,
                                value: '15',
                                is_primary: 2,
                              },
                              {
                                variable: {
                                  id: 6,
                                  name: 'Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos',
                                },
                                variable_id: 6,
                                value: '0',
                                is_primary: 2,
                              },
                              {
                                variable: { id: 0, name: 'Domicilio' },
                                variable_id: 0,
                                value: '120000',
                                is_primary: 1,
                              },
                            ],
                          },
                        })
                      "
                      type="button"
                      class="btn bg_purple text-white shadow rounded"
                      :class="!products.length ? 'disabled' : ''"
                      :key="sum"
                      style="-webkit-appearance: none !important"
                    >
                      <div class="text-left">
                        Continuar al Checkout
                        <span class="text-right cart_price_span"
                          >$<span id="price_cart_checkout">{{
                            new Intl.NumberFormat("es-CO").format(sum)
                          }}</span></span
                        >
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form_search mx-0" id="search_auto">
          <div class="img_laika_1 position-relative">
            <div class="position-absolute">
              <a href="https://laika.com.co/city/bog/dog">
                <img
                  src="https://laika.com.co/assets/home/LaikaMascotas.svg"
                  class="img_laika_navbar lazy"
                />
              </a>
            </div>
          </div>
          <div
            class="
              input-group
              col-12 col-md-12 col-lg-12
              offset-xl-1
              col-xl-7
              p-0 p-0
            "
          >
            <img
              src="https://laika.com.co/assets/home/search_icon_mc.svg"
              class="icon_search"
              @click="result_search()"
              id="btn_result_search"
              alt=""
            />
            <img
              src="https://laika.com.co/assets/home/times_mc.svg"
              class="icon_close_searcher btn_close_search_autocomplete_new"
              @click="closeSearcher()"
              id="btnSearcher"
            />

            <input
              type="text"
              @click="clickSearch"
              v-model="query"
              autocomplete="off"
              v-on:keyup="timer_search()"
              name="autocomplete_search"
              id="autocomplete_search"
              class="autocomplete_search_style placeholder form-control"
              placeholder="¿Qué necesita tu mascota?"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        d-none d-xl-block
        container-fluid
        
      "
      id="header_menu"
    >
      <div class="row nav-3 shadow-sm bg-white pl-0 pr-0">
        <div
          class="
            col-md-10
            ml-auto
            mr-auto
            position-relative
            stay_hover_options
            d-flex
          "
        >
          <!-- submenu dog -->
          <div
            class="submenu_header"
            style="margin-right: 30px"
            id="hover_dog_submenu"
          >
            <div
              id="menu_perro"
              class="d-flex"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="text-left text-white wspc_no_w">
                <img
                  width="30"
                  src="https://laika.com.co/assets/home/dog_mc.svg "
                />
                <span class="color_purple" id="active-dog_"> Perro </span>
              </span>
              <div class="px-2">
                <img
                  src="https://laika.com.co/assets/punto_de_flecha_a_la_derecha_1.svg"
                  class="pt-1"
                  style="height: 11px"
                  alt=""
                />
              </div>
            </div>
            <div class="dropdown_dog_header mt-2">
              <div class="d-flex">
                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Alimento', slug: 'alimento', id: 1 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          1,
                          0
                        )
                      "
                    >
                      Alimento
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Alimento', slug: 'alimento', id: 1 },
                            {
                              name: 'Concentrado',
                              slug: 'concentrado',
                              id: 3,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            1,
                            3
                          )
                        "
                      >
                        Concentrado
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Alimento', slug: 'alimento', id: 1 },
                            { name: 'Humedo', slug: 'humedo', id: 2 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            1,
                            2
                          )
                        "
                      >
                        Humedo
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Alimento', slug: 'alimento', id: 1 },
                            {
                              name: 'Dietas naturales',
                              slug: 'dietas-naturales',
                              id: 56,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            1,
                            56
                          )
                        "
                      >
                        Dietas naturales
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Alimento', slug: 'alimento', id: 1 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Snacks', slug: 'snacks', id: 2 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          2,
                          0
                        )
                      "
                    >
                      Snacks
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Brownies y otros',
                              slug: 'brownies-y-otros',
                              id: 50,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            50
                          )
                        "
                      >
                        Brownies y otros
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Tortas de Celebraci\u00f3n',
                              slug: 'tortas-de-celebracion',
                              id: 202,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            202
                          )
                        "
                      >
                        Tortas de Celebración
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Huesos y Carnaza',
                              slug: 'huesos-y-carnaza',
                              id: 203,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            203
                          )
                        "
                      >
                        Huesos y Carnaza
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Galletas y Snacks',
                              slug: 'galletas-y-snacks',
                              id: 204,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            204
                          )
                        "
                      >
                        Galletas y Snacks
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Snacks', slug: 'snacks', id: 2 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Farmapet', slug: 'farmacia', id: 31 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          31,
                          0
                        )
                      "
                    >
                      Farmapet
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Antiparasitarios',
                              slug: 'antiparasitarios',
                              id: 23,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            23
                          )
                        "
                      >
                        Antiparasitarios
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Suplementos',
                              slug: 'suplementos',
                              id: 32,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            32
                          )
                        "
                      >
                        Suplementos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Analg\u00e9sicos',
                              slug: 'analgesicos',
                              id: 206,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            206
                          )
                        "
                      >
                        Analgésicos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Antibacterianos',
                              slug: 'antibacterianos',
                              id: 207,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            207
                          )
                        "
                      >
                        Antibacterianos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Antibi\u00f3ticos',
                              slug: 'antibioticos',
                              id: 208,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            208
                          )
                        "
                      >
                        Antibióticos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Antiinflamatorios',
                              slug: 'antiinflamatorios',
                              id: 209,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            209
                          )
                        "
                      >
                        Antiinflamatorios
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Farmapet', slug: 'farmacia', id: 31 },
                            {
                              name: 'Antipulgas y Garrapatas',
                              slug: 'antipulgas-y-garrapatas',
                              id: 210,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            31,
                            210
                          )
                        "
                      >
                        Antipulgas y Garrapatas
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Farmapet', slug: 'farmacia', id: 31 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          {
                            name: 'Cuidado e Higiene',
                            slug: 'cuidado-e-higiene',
                            id: 29,
                          },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          29,
                          0
                        )
                      "
                    >
                      Cuidado e Higiene
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            { name: 'Cepillos', slug: 'cepillos', id: 194 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            194
                          )
                        "
                      >
                        Cepillos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            {
                              name: 'Corta U\u00f1as',
                              slug: 'corta-unas',
                              id: 195,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            195
                          )
                        "
                      >
                        Corta Uñas
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            {
                              name: 'Cuidado Hogar',
                              slug: 'cuidado-hogar',
                              id: 196,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            196
                          )
                        "
                      >
                        Cuidado Hogar
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            {
                              name: 'Cuidado Oral',
                              slug: 'cuidado-oral',
                              id: 197,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            197
                          )
                        "
                      >
                        Cuidado Oral
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            {
                              name: 'Protector Veh\u00edculos',
                              slug: 'protector-vehiculos',
                              id: 198,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            198
                          )
                        "
                      >
                        Protector Vehículos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            { name: 'Higiene', slug: 'higiene', id: 199 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            199
                          )
                        "
                      >
                        Higiene
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 29,
                            },
                            {
                              name: 'Residuos de Mascotas',
                              slug: 'residuos-de-mascotas',
                              id: 200,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            29,
                            200
                          )
                        "
                      >
                        Residuos de Mascotas
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          {
                            name: 'Cuidado e Higiene',
                            slug: 'cuidado-e-higiene',
                            id: 29,
                          },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Juguetes', slug: 'juguetes', id: 25 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          25,
                          0
                        )
                      "
                    >
                      Juguetes
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Juguetes', slug: 'juguetes', id: 25 },
                            { name: 'Juguetes.', slug: 'juguetes', id: 177 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            25,
                            177
                          )
                        "
                      >
                        Juguetes.
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Juguetes', slug: 'juguetes', id: 25 },
                            { name: 'Peluches', slug: 'peluches', id: 178 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            25,
                            178
                          )
                        "
                      >
                        Peluches
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Juguetes', slug: 'juguetes', id: 25 },
                            { name: 'Cuerdas', slug: 'cuerdas', id: 186 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            25,
                            186
                          )
                        "
                      >
                        Cuerdas
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'dog',
                            { name: 'Juguetes', slug: 'juguetes', id: 25 },
                            {
                              name: 'Interactivos',
                              slug: 'interactivos',
                              id: 188,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            25,
                            188
                          )
                        "
                      >
                        Interactivos
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'dog',
                          { name: 'Juguetes', slug: 'juguetes', id: 25 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      justify-content-center
                    "
                  >
                    <div class="more_categories_navbar">Más categorías</div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div class="d-flex my-3 cursor_pointer">
                        <img
                          class="pr-1 mr-2"
                          src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios+(1).png"
                          height="30"
                        />
                        <div
                          class="color_gray_subcategories"
                          style="white-space: nowrap"
                          @click="
                            select_category(
                              'category',
                              'bog',
                              'dog',
                              {
                                name: 'Accesorios',
                                slug: 'accesorios',
                                id: 4,
                              },
                              { slug: 'todos' },
                              'todos',
                              'todo-para-mascota',
                              1,
                              4,
                              0
                            )
                          "
                        >
                          Accesorios
                        </div>
                      </div>
                      <div class="d-flex my-3 cursor_pointer">
                        <img
                          class="pr-1 mr-2"
                          src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613595491Categoria_pet_owner.png"
                          height="30"
                        />
                        <div
                          class="color_gray_subcategories"
                          style="white-space: nowrap"
                          @click="
                            select_category(
                              'category',
                              'bog',
                              'dog',
                              {
                                name: 'Para PetLovers',
                                slug: 'para-amos',
                                id: 27,
                              },
                              { slug: 'todos' },
                              'todos',
                              'todo-para-mascota',
                              1,
                              27,
                              0
                            )
                          "
                        >
                          Para PetLovers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container_brands_header position-relative">
                <div class="pb-3">Marcas destacadas</div>
                <div class="d-flex">
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'dog',
                        'hills',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      style="width: 100px"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'dog',
                        'salvaje',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      style="width: 100px"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'dog',
                        'max',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      style="width: 100px"
                      src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'dog',
                        'equilibrio',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      style="width: 100px"
                      src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'dog',
                        'eukanuba',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      style="width: 100px"
                      src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/eukanuba_circulo1.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'dog',
                        'royal-canin',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      style="width: 100px"
                      src="https://laikapp.s3.amazonaws.com/images_categories/1589395980_ROYAL_CANIN_500X500.png"
                      class="lazy w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end submenu dog -->

          <!-- submenu dog -->
          <div
            class="submenu_header"
            style="margin-right: 25px"
            id="hover_cat_submenu"
          >
            <div
              id="menu_gato_div"
              class="d-flex"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="text-left text-white wspc_no_w">
                <img
                  width="30"
                  src="https://laika.com.co/assets/home/cat_mc_s.svg  "
                />
                <span class="color_purple" id="active-cat_"> Gato </span>
              </span>
              <div class="px-2">
                <img
                  src="https://laika.com.co/assets/punto_de_flecha_a_la_derecha_1.svg"
                  class="pt-1"
                  style="height: 11px"
                  alt=""
                />
              </div>
            </div>
            <div class="mt-2 dropdown_cat_header">
              <div class="d-flex">
                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Alimento', slug: 'alimento', id: 5 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          5,
                          0
                        )
                      "
                    >
                      Alimento
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Alimento', slug: 'alimento', id: 5 },
                            {
                              name: 'Concentrado',
                              slug: 'concentrado',
                              id: 12,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            5,
                            12
                          )
                        "
                      >
                        Concentrado
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Alimento', slug: 'alimento', id: 5 },
                            { name: 'Humedo', slug: 'humedo', id: 2 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            5,
                            2
                          )
                        "
                      >
                        Humedo
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Alimento', slug: 'alimento', id: 5 },
                            {
                              name: 'Dietas naturales',
                              slug: 'dietas-naturales',
                              id: 56,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            5,
                            56
                          )
                        "
                      >
                        Dietas naturales
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Alimento', slug: 'alimento', id: 5 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/images_categories/categoria_arenas+(1).png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Arenas', slug: 'arenas', id: 9 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          9,
                          0
                        )
                      "
                    >
                      Arenas
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Arenas', slug: 'arenas', id: 9 },
                            { name: 'Arenas', slug: 'arenas', id: 18 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            9,
                            18
                          )
                        "
                      >
                        Arenas
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Arenas', slug: 'arenas', id: 9 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Snacks', slug: 'snacks', id: 2 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          2,
                          0
                        )
                      "
                    >
                      Snacks
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Brownies y otros',
                              slug: 'brownies-y-otros',
                              id: 50,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            50
                          )
                        "
                      >
                        Brownies y otros
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Tortas de Celebraci\u00f3n',
                              slug: 'tortas-de-celebracion',
                              id: 202,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            202
                          )
                        "
                      >
                        Tortas de Celebración
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Snacks', slug: 'snacks', id: 2 },
                            {
                              name: 'Galletas y Snacks',
                              slug: 'galletas-y-snacks',
                              id: 204,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            2,
                            204
                          )
                        "
                      >
                        Galletas y Snacks
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Snacks', slug: 'snacks', id: 2 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Farmapet', slug: 'farmacia', id: 32 },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          32,
                          0
                        )
                      "
                    >
                      Farmapet
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Antiparasitarios',
                              slug: 'antiparasitarios',
                              id: 23,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            23
                          )
                        "
                      >
                        Antiparasitarios
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Suplementos',
                              slug: 'suplementos',
                              id: 32,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            32
                          )
                        "
                      >
                        Suplementos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Analg\u00e9sicos',
                              slug: 'analgesicos',
                              id: 206,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            206
                          )
                        "
                      >
                        Analgésicos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Antibacterianos',
                              slug: 'antibacterianos',
                              id: 207,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            207
                          )
                        "
                      >
                        Antibacterianos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Antibi\u00f3ticos',
                              slug: 'antibioticos',
                              id: 208,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            208
                          )
                        "
                      >
                        Antibióticos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Antipulgas y Garrapatas',
                              slug: 'antipulgas-y-garrapatas',
                              id: 210,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            210
                          )
                        "
                      >
                        Antipulgas y Garrapatas
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            { name: 'Farmapet', slug: 'farmacia', id: 32 },
                            {
                              name: 'Dermatol\u00f3gicos',
                              slug: 'dermatologicos',
                              id: 213,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            32,
                            213
                          )
                        "
                      >
                        Dermatológicos
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          { name: 'Farmapet', slug: 'farmacia', id: 32 },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      cursor_pointer
                    "
                  >
                    <img
                      class="pr-1 mr-2"
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png "
                      height="30"
                    />
                    <div
                      style="white-space: nowrap"
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          {
                            name: 'Cuidado e Higiene',
                            slug: 'cuidado-e-higiene',
                            id: 30,
                          },
                          'todos',
                          'todos',
                          'todo-para-mascota',
                          1,
                          30,
                          0
                        )
                      "
                    >
                      Cuidado e Higiene
                    </div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 30,
                            },
                            { name: 'Cepillos', slug: 'cepillos', id: 194 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            30,
                            194
                          )
                        "
                      >
                        Cepillos
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 30,
                            },
                            {
                              name: 'Corta U\u00f1as',
                              slug: 'corta-unas',
                              id: 195,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            30,
                            195
                          )
                        "
                      >
                        Corta Uñas
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 30,
                            },
                            {
                              name: 'Cuidado Hogar',
                              slug: 'cuidado-hogar',
                              id: 196,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            30,
                            196
                          )
                        "
                      >
                        Cuidado Hogar
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 30,
                            },
                            {
                              name: 'Cuidado Oral',
                              slug: 'cuidado-oral',
                              id: 197,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            30,
                            197
                          )
                        "
                      >
                        Cuidado Oral
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 30,
                            },
                            { name: 'Higiene', slug: 'higiene', id: 199 },
                            'todos',
                            'todo-para-mascota',
                            1,
                            30,
                            199
                          )
                        "
                      >
                        Higiene
                      </div>
                      <div
                        class="cursor_pointer hover_categories_subcategories"
                        @click="
                          select_category(
                            'category',
                            'bog',
                            'cat',
                            {
                              name: 'Cuidado e Higiene',
                              slug: 'cuidado-e-higiene',
                              id: 30,
                            },
                            {
                              name: 'Neutralizadores de olor',
                              slug: 'neutralizadores-de-olor',
                              id: 201,
                            },
                            'todos',
                            'todo-para-mascota',
                            1,
                            30,
                            201
                          )
                        "
                      >
                        Neutralizadores de olor
                      </div>
                    </div>
                    <div
                      class="
                        mb-2
                        cursor_pointer
                        all_categories_a
                        hover_categories_subcategories
                      "
                      @click="
                        select_category(
                          'category',
                          'bog',
                          'cat',
                          {
                            name: 'Cuidado e Higiene',
                            slug: 'cuidado-e-higiene',
                            id: 30,
                          },
                          { slug: 'todos' },
                          'todos',
                          'todo-para-mascota',
                          1,
                          0,
                          0
                        )
                      "
                    >
                      Ver más
                    </div>
                  </div>
                </div>

                <div class="pt-1 pb-3 px-3">
                  <div
                    class="
                      font-20 font_causten_round_extra_bold_oblique
                      d-flex
                      border-bottom
                      pb-2
                      justify-content-center
                    "
                  >
                    <div class="more_categories_navbar">Más categorías</div>
                  </div>
                  <div class="pt-1 px-3 mx-auto text-left">
                    <div>
                      <div class="d-flex my-3 cursor_pointer">
                        <img
                          class="pr-1 mr-2"
                          src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png "
                          height="30"
                        />
                        <div
                          class="color_gray_subcategories"
                          style="white-space: nowrap"
                          @click="
                            select_category(
                              'category',
                              'bog',
                              'cat',
                              { name: 'Juguetes', slug: 'juguetes', id: 26 },
                              { slug: 'todos' },
                              'todos',
                              'todo-para-mascota',
                              1,
                              26,
                              0
                            )
                          "
                        >
                          Juguetes
                        </div>
                      </div>
                      <div class="d-flex my-3 cursor_pointer">
                        <img
                          class="pr-1 mr-2"
                          src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios+(1).png "
                          height="30"
                        />
                        <div
                          class="color_gray_subcategories"
                          style="white-space: nowrap"
                          @click="
                            select_category(
                              'category',
                              'bog',
                              'cat',
                              {
                                name: 'Accesorios',
                                slug: 'accesorios',
                                id: 4,
                              },
                              { slug: 'todos' },
                              'todos',
                              'todo-para-mascota',
                              1,
                              4,
                              0
                            )
                          "
                        >
                          Accesorios
                        </div>
                      </div>
                      <div class="d-flex my-3 cursor_pointer">
                        <img
                          class="pr-1 mr-2"
                          src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613595491Categoria_pet_owner.png "
                          height="30"
                        />
                        <div
                          class="color_gray_subcategories"
                          style="white-space: nowrap"
                          @click="
                            select_category(
                              'category',
                              'bog',
                              'cat',
                              {
                                name: 'Para PetLovers',
                                slug: 'para-amos',
                                id: 28,
                              },
                              { slug: 'todos' },
                              'todos',
                              'todo-para-mascota',
                              1,
                              28,
                              0
                            )
                          "
                        >
                          Para PetLovers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container_brands_header position-relative">
                <div class="pb-3">Marcas destacadas</div>
                <div class="d-flex">
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'cat',
                        'hills',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'cat',
                        'furry',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/LOGO_3OO4.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'cat',
                        'salvaje',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'cat',
                        'max',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'cat',
                        'equilibrio',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      src="https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png"
                      class="lazy w-100"
                    />
                  </div>
                  <div
                    class="card_brands_header cursor_pointer"
                    @click="
                      redirect_brands(
                        'brands',
                        'cat',
                        'royal-canin',
                        'todos',
                        'todos',
                        'todo-para-mascota'
                      )
                    "
                  >
                    <img
                      src="https://laikapp.s3.amazonaws.com/images_categories/1589395980_ROYAL_CANIN_500X500.png"
                      class="lazy w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end submenu cat -->
          <a
            class="submenu_header cursor_pointer"
            id="hover_services"
            @click="redirect_services('header')"
          >
            <div
              style="padding-top: 2px"
              class="d-flex color_purple wspc_no_w"
            >
              Servicios
              <div class="px-2">
                <img
                  src="https://laika.com.co/assets/punto_de_flecha_a_la_derecha_1.svg"
                  style="height: 7px"
                  alt=""
                />
              </div>
            </div>
          </a>
          <div
            class="container_submenu_services position-absolute text-center"
          >
            <div class="d-flex justify-content-center">
              <div class="card card_agenda_service_header">
                <div class="circle_background_agenda_header"></div>
                <div class="text-center container_img_agenda_header">
                  <img
                    class="lazy"
                    src="https://laikapp.s3.amazonaws.com/images_services/banio_express-min.png"
                  />
                </div>
                <div
                  class="
                    text-center
                    pt-2
                    color_purple
                    text_agenda_name_header text_overflow_2_line
                  "
                >
                  Baño Express
                </div>
                <button
                  class="btn color_purple btn_agenda"
                  @click="
                    send_request_service(0, 1, '', 1, 'agenda_service', 1)
                  "
                >
                  Agendar
                  <i class="fa fa-arrow-right arrow_button_agenda"></i>
                </button>
              </div>
              <div class="card card_agenda_service_header">
                <div class="circle_background_agenda_header"></div>
                <div class="text-center container_img_agenda_header">
                  <img
                    class="lazy"
                    src="https://laikapp.s3.amazonaws.com/images_services/veterinaria-min.png"
                  />
                </div>
                <div
                  class="
                    text-center
                    pt-2
                    color_purple
                    text_agenda_name_header text_overflow_2_line
                  "
                >
                  Veterinario en casa
                </div>
                <button
                  class="btn color_purple btn_agenda"
                  @click="
                    send_request_service(0, 2, '', 1, 'agenda_service', 2)
                  "
                >
                  Agendar
                  <i class="fa fa-arrow-right arrow_button_agenda"></i>
                </button>
              </div>
            </div>
            <hr />
            <a
              class="cursor_pointer color_purple"
              @click="redirect_services('header')"
            >
              <div class="font_causten_round_extra_bold_oblique font-15">
                Ver todos los servicios
              </div>
            </a>
          </div>
          <a class="submenu_header" href="#">
            <div style="padding-top: 2px" class="color_purple wspc_no_w">
              Promociones
            </div>
          </a>
          <a class="submenu_header" href="#">
            <div
              style="padding-top: 2px"
              class="ml-2 ml-xl-2 color_purple wspc_no_w"
            >
              Blog
            </div>
          </a>

          <div
            class="text-left text-white align-self-center"
            style="position: absolute; cursor: pointer; right: 14px"
          >
            <img
              width="160"
              class="img_member lazy br-8"
              @click="redirect_member_product()"
              src=" https://laika.com.co/assets/home/LaikaMemberNew.svg "
            />
          </div>
        </div>
      </div>
    </div>
    <h1 class="d-none">Laika Mascotas</h1>
    <div class="font_causten_round_semi_bold_oblique">
      <div class="d-sm-flex d-md-flex d-xl-none row col-12 mx-auto py-2 bg-white justify-content-center font_causten_round_semi_bold_oblique">
        <a href="https://laika.com.co/city/bog/dog" class="no_decoration_links">
          <div class="box_universe" style="cursor: pointer; background: #603e85; color: #fff;">
              <span class="ml-2" style="background: #603e85; color: #fff;">
                Perro
              </span>
              <span class="text-left text-white mr-1 ml-1">
                <img width="30" src="https://laika.com.co/assets/home/dog_mc.svg " alt="Colombia ">
              </span>
          </div>
        </a>
        <a href="https://laika.com.co/city/bog/cat" class="no_decoration_links">
          <div class="box_universe ml-2" style="cursor: pointer; ">
            <span class="ml-2" style="">
              Gato
            </span>
            <span class="text-left text-white mr-1 ml-1">
              <img width="30"  class="no_decoration_links" src="https://laika.com.co/assets/home/cat_mc_s.svg " alt="Colombia ">
            </span>
          </div>
        </a>
      </div>
      <div class="px-0 d-sm-flex d-xl-none row col-12 mx-auto py-2 bg-white justify-content-center" id="header_pets_dog_cat_resp">
        <div class="">
          <input type="hidden" id="clevertap_membership">
          <img height="30" class="cursor_pointer lazy br-8 mx-2" @click="redirect_member_product()" src=" https://laika.com.co/assets/home/LaikaMemberNew.svg ">
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        openMenu: false,
        count: 0,
        query: "",
        search_result_categories: [
          {
            id: 1,
            name: "ALimento",
          },
        ],
        search_result_brands: [
          {
            id: 1,
            name: "Hills",
          },
        ],
        search_result_products: [
          {
            id: 1,
            name: "Galletas De Cordero Y Arroz Laika By Rausch",
          },
        ],
        sidebar_items: [
          {
            id: 1,
            name: "Perro",
            src: "https://laika.com.co/assets/home/dog_mc.svg",
          },
          {
            id: 2,
            name: "Gato",
            src: "https://laika.com.co/assets/home/cat_mc_s.svg",
          },
        ],
        products: [],
        save_membership_validation: false,
        saving_member_by_product: 0,
        sum: 0,
        top_brands: false,
      };
    },
    methods: {
      openCart() {
        console.log("openCart");
      },
      clickSearch() {
        console.log("clickSearch");
      },
      result_search() {
        console.log("result_search");
      },
      select_category() {
        console.log("select_category");
      },
      send_request_service() {
        console.log("send_request_service");
      },
      redirect_services() {
        console.log("redirect_services");
      },
      redirect_brands() {
        console.log("redirect_brands");
      },
      validate_city_cart() {
        console.log("validate_city_cart");
      },
      close() {
        console.log('close')
      }
    },
  };
</script>
