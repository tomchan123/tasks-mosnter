<script setup lang="ts">
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
</script>

<template>
  <NavigationMenu>
    <div class="flex mr-2">Placeholder</div>

    <NavigationMenuList>
      <NavigationMenuItem>
        <NuxtLink v-slot="{ isActive, href, navigate }" custom to="/home">
          <NavigationMenuLink
            :active="isActive"
            :href
            :class="navigationMenuTriggerStyle()"
            @click="navigate"
          >
            Home
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
