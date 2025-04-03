<script setup lang="ts">
type NavMenuItemData = {
  iconName: string;
  url: string;
  title: string;
};

const navMenuItemData: NavMenuItemData[] = [
  { iconName: "lucide:house", url: "/", title: "Home" },
  { iconName: "lucide:calendar", url: "/calendar", title: "Calendar" },
  { iconName: "lucide:settings", url: "/settings", title: "Settings" },
];
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="item in navMenuItemData" :key="item.url">
        <NuxtLink v-slot="{ isActive, href, navigate }" :to="item.url" custom>
          <NavigationMenuLink
            :active="isActive"
            :href
            class="group/item"
            @click="navigate"
          >
            <div
              class="flex flex-row justify-center items-center gap-1 h-8 px-2"
            >
              <Icon :name="item.iconName" class="text-xl" />
              <p
                class="text-base hidden opacity-0 group-hover/item:block group-hover/item:opacity-100 transition"
              >
                {{ item.title }}
              </p>
            </div>
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
