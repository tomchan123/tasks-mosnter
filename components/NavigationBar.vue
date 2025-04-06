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
  <NavigationMenu
    class="bg-background rounded-xl p-2 ring-2 ring-accent shadow-md"
  >
    <NavigationMenuList class="group/list">
      <NavigationMenuItem v-for="item in navMenuItemData" :key="item.url">
        <NuxtLink v-slot="{ isActive, href, navigate }" :to="item.url" custom>
          <NavigationMenuLink
            :active="isActive"
            :href
            class=""
            @click="navigate"
          >
            <div class="flex flex-row justify-center items-center h-6 px-2">
              <Icon :name="item.iconName" class="text-xl" />
              <p
                class="text-base max-w-0 overflow-hidden group-hover/link:max-w-xl group-hover/link:block transition-all ease-in-out duration-300 m-0 group-hover/link:ml-1"
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
