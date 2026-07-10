<template>
  <div class="min-h-screen bg-zinc-50 text-zinc-900 font-montserrat selection:bg-[#ffd036] selection:text-zinc-900 antialiased">
    <!-- Navigation -->
    <header class="fixed top-0 w-full z-50 bg-zinc-50/90 backdrop-blur-sm border-b border-zinc-200/60">
      <div class="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <!-- Logo -->
        <div 
          @click="setView('start')" 
          class="text-xl font-extralight tracking-[0.4em] cursor-pointer hover:opacity-60 transition-opacity duration-300"
        >
          PRETTY CONCRETE
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-16">
          <a 
            v-for="link in navLinks" 
            :key="link.id" 
            @click="setView(link.id)"
            :class="[
              'text-[10px] uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer relative py-2',
              currentView === link.id ? 'text-[#ffd036]' : 'text-zinc-400 hover:text-zinc-900'
            ]"
          >
            {{ link.name }}
            <span 
              v-if="currentView === link.id" 
              class="absolute bottom-0 left-0 w-full h-px bg-[#ffd036] animate-underline"
            ></span>
          </a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden p-2 text-zinc-900 hover:text-[#ffd036] transition-colors"
          aria-label="Toggle Menu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Nav Overlay -->
      <transition name="fade">
        <div 
          v-if="isMenuOpen" 
          class="absolute top-24 left-0 w-full bg-zinc-50 border-b border-zinc-200 flex flex-col items-center py-16 space-y-10 md:hidden z-40"
        >
          <a 
            v-for="link in navLinks" 
            :key="link.id" 
            @click="setView(link.id)"
            :class="[
              'text-xs uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer',
              currentView === link.id ? 'text-[#ffd036]' : 'text-zinc-400'
            ]"
            class="hover:text-zinc-900"
          >
            {{ link.name }}
          </a>
        </div>
      </transition>
    </header>

    <!-- Main Content Area -->
    <main class="pt-24">
      <transition name="view-fade" mode="out-in">
        <!-- START VIEW -->
        <div v-if="currentView === 'start'" key="start" class="animate-in">
          <!-- Hero Section -->
          <section class="relative h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1516455590571-1825646a657e?auto=format&fit=crop&q=80&w=2000" 
              alt="Minimalist Concrete Interior" 
              class="absolute inset-0 w-full h-full object-cover opacity-90 scale-105 animate-slow-zoom"
            />
            <div class="absolute inset-0 bg-zinc-900/10"></div>
            <div class="relative z-10 text-center px-6 max-w-4xl">
              <h1 class="text-5xl md:text-7xl font-extralight text-zinc-900 mb-10 tracking-tight leading-tight animate-fade-up">
                Rå betong.<br/><span class="italic font-light">Ren design.</span>
              </h1>
              <button 
                @click="setView('galleri')"
                class="group relative px-10 py-5 bg-[#ffd036] text-zinc-900 text-[10px] uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:text-white"
              >
                <span class="relative z-10">Se kollektionen</span>
                <div class="absolute inset-0 bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </section>

          <!-- Core Pillars -->
          <section class="py-32 px-8 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div class="space-y-6 text-center md:text-left group">
                <span class="block text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-300 group-hover:text-[#ffd036] transition-colors duration-500">01</span>
                <h4 class="text-2xl font-extralight text-zinc-900 tracking-tight">Hantverk & Kvalitet</h4>
                <p class="text-zinc-500 font-light leading-relaxed text-sm">
                  Varje objekt gjuts för hand med precision i vår studio i Sverige, vilket garanterar en unik finish och tidlös hållbarhet.
                </p>
              </div>
              <div class="space-y-6 text-center md:text-left group">
                <span class="block text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-300 group-hover:text-[#ffd036] transition-colors duration-500">02</span>
                <h4 class="text-2xl font-extralight text-zinc-900 tracking-tight">Rå Elegans</h4>
                <p class="text-zinc-500 font-light leading-relaxed text-sm">
                  Vi hyllar betongens naturliga karaktär. De små variationerna i ytan är det som gör varje produkt till ett unikt konstverk.
                </p>
              </div>
              <div class="space-y-6 text-center md:text-left group">
                <span class="block text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-300 group-hover:text-[#ffd036] transition-colors duration-500">03</span>
                <h4 class="text-2xl font-extralight text-zinc-900 tracking-tight">Skandinavisk Enkelhet</h4>
                <p class="text-zinc-500 font-light leading-relaxed text-sm">
                  Tidlös, funktionell minimalism designad för att bringa lugn och rå naturtextur in i det moderna hemmet.
                </p>
              </div>
            </div>
          </section>
        </div>

        <!-- OM OSS VIEW -->
        <div v-else-if="currentView === 'omoss'" key="omoss" class="animate-in">
          <section class="flex flex-col md:flex-row min-h-[calc(100vh-96px)]">
            <div class="w-full md:w-1/2 h-[60vh] md:h-auto relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio Interior" 
                class="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div class="w-full md:w-1/2 flex items-center justify-center px-8 md:px-24 py-24 bg-zinc-100">
              <div class="max-w-lg space-y-12">
                <div class="space-y-4">
                  <h2 class="text-4xl font-extralight text-zinc-900 tracking-tight">Bakom betongen</h2>
                  <div class="w-16 h-px bg-[#ffd036]"></div>
                </div>
                <div class="space-y-6">
                  <p class="text-zinc-600 font-light leading-relaxed text-xl">
                    Pretty Concrete föddes ur en fascination för kontrasten mellan det industriella och det hemtrevliga. Vi tror att skönhet finns i det ofullkomliga.
                  </p>
                  <p class="text-zinc-500 font-light leading-relaxed">
                    Varje bit är handgjuten, vilket innebär att inga två objekt är identiska. Genom att kombinera råa material med minimalistisk form skapar vi inredning som inte bara fyller en funktion, utan som berättar en historia om hantverk och tid.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- GALLERI VIEW -->
        <div v-else-if="currentView === 'galleri'" key="galleri" class="animate-in">
          <section class="py-24 px-8 max-w-7xl mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-4xl font-extralight text-zinc-900 tracking-tight mb-6">Kollektionen</h2>
              <p class="text-zinc-400 font-light uppercase tracking-[0.2em] text-[10px]">Utforska våra handgjorda objekt</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                v-for="(item, index) in galleryItems" 
                :key="index" 
                class="group relative aspect-[4/5] overflow-hidden bg-zinc-200 cursor-pointer"
              >
                <img 
                  :src="item.url" 
                  :alt="item.title" 
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white p-8 text-center backdrop-blur-[2px]">
                  <p class="text-xs uppercase tracking-[0.2em] mb-2 font-light">{{ item.title }}</p>
                  <p class="text-[10px] font-light opacity-70 mb-6">DM för beställning</p>
                  <div class="flex items-center space-x-4 text-[10px] uppercase tracking-widest">
                    <span class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      {{ item.likes }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Instagram CTA -->
            <div class="mt-32 py-20 border-t border-zinc-200 flex flex-col items-center justify-center text-center space-y-8">
              <p class="text-zinc-400 font-light uppercase tracking-[0.3em] text-[10px]">Hitta oss på sociala medier</p>
              <a 
                href="https://instagram.com" 
                target="_blank"
                class="group flex items-center space-x-4 text-zinc-900 hover:text-[#ffd036] transition-all duration-500"
              >
                <span class="text-2xl font-extralight tracking-[0.2em] uppercase">Följ oss på Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>
        </div>

        <!-- KONTAKT VIEW -->
        <div v-else-if="currentView === 'kontakt'" key="kontakt" class="animate-in">
          <section class="py-24 px-8 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div class="space-y-16">
                <div class="space-y-6">
                  <h2 class="text-4xl font-extralight text-zinc-900 tracking-tight">Kontakta oss</h2>
                  <p class="text-zinc-500 font-light leading-relaxed text-lg">
                    Vi tar emot beställningar och frågor via Instagram DM eller e-post. Varje produkt är unik, så tveka inte att fråga om specifika önskemål.
                  </p>
                </div>

                <div class="space-y-8">
                  <div class="flex items-center space-x-6 group cursor-pointer">
                    <div class="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-[#ffd036] transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-zinc-400 group-hover:text-[#ffd036] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span class="text-sm font-light text-zinc-600 tracking-wide">hello@prettyconcrete.se</span>
                  </div>
                  <div class="flex items-center space-x-6 group cursor-pointer">
                    <div class="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-[#ffd036] transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-zinc-400 group-hover:text-[#ffd036] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span class="text-sm font-light text-zinc-600 tracking-wide">@prettyconcrete</span>
                  </div>
                </div>
              </div>

              <div class="bg-white p-10 md:p-16 border border-zinc-200 shadow-sm">
                <form @submit.prevent="handleSubmit" class="space-y-10">
                  <div class="space-y-3">
                    <label class="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">Namn</label>
                    <input 
                      type="text" 
                      class="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-[#ffd036] transition-all duration-500 font-light text-sm" 
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div class="space-y-3">
                    <label class="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">E-post</label>
                    <input 
                      type="email" 
                      class="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-[#ffd036] transition-all duration-500 font-light text-sm" 
                      placeholder="email@example.com"
                    />
                  </div>
                  <div class="space-y-3">
                    <label class="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">Meddelande</label>
                    <textarea 
                      rows="4" 
                      class="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-[#ffd036] transition-all duration-500 font-light text-sm resize-none" 
                      placeholder="Hur kan vi hjälpa dig?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    class="w-full py-5 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-[#ffd036] hover:text-zinc-900 transition-all duration-500"
                  >
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <!-- 404 VIEW -->
        <div v-else key="404" class="h-[calc(100vh-96px)] flex items-center justify-center px-6 text-center">
          <div class="space-y-12">
            <h2 class="text-7xl md:text-9xl font-extralight text-zinc-200">404</h2>
            <p class="text-2xl font-light text-zinc-900 tracking-tight">
              Betongen har inte härdat än.
            </p>
            <button 
              @click="setView('start')"
              class="px-10 py-4 border border-zinc-200 text-[10px] uppercase tracking-[0.2em] hover:border-[#ffd036] hover:text-[#ffd036] transition-all duration-500"
            >
              Tillbaka till start
            </button>
          </div>
        </div>
      </transition>
    </main>

    <!-- Footer -->
    <footer class="py-16 px-6 border-t border-zinc-200 text-center">
      <p class="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
        &copy; {{ new Date().getFullYear() }} Pretty Concrete. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentView = ref('start');
const isMenuOpen = ref(false);

const navLinks = [
  { name: 'Start', id: 'start' },
  { name: 'Om oss', id: 'omoss' },
  { name: 'Galleri', id: 'galleri' },
  { name: 'Kontakt', id: 'kontakt' },
];

const galleryItems = [
  { title: 'Kruka "Rå"', likes: '124', url: 'https://images.unsplash.com/photo-1612196808214-b9e75873967c?auto=format&fit=crop&q=80&w=800' },
  { title: 'Ljusstake Minimal', likes: '89', url: 'https://images.unsplash.com/photo-1534349762230-e0979537966a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Betongbricka S', likes: '210', url: 'https://images.unsplash.com/photo-1581783898377-1a9777097541?auto=format&fit=crop&q=80&w=800' },
  { title: 'Vase "Symmetri"', likes: '156', url: 'https://images.unsplash.com/photo-1578500494198-77377697677a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Skål "Kust"', likes: '74', url: 'https://images.unsplash.com/photo-1603006958639-99677a7f785a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Kruka "Svart"', likes: '182', url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800' },
];

const setView = (viewId: string) => {
  currentView.value = viewId;
  isMenuOpen.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleSubmit = () => {
  alert('Tack för ditt meddelande! Vi återkommer till dig snart.');
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

/* Custom Animations */
.view-fade-enter-active,
.view-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.view-fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.view-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-underline {
  animation: underline-grow 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes underline-grow {
  from { width: 0; }
  to { width: 100%; }
}

.animate-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slow-zoom {
  animation: slowZoom 20s linear infinite alternate;
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}
</style>