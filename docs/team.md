---
layout: page
title: کمیټه
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// Add your committee members here
const coreMembers = [
  {
    avatar: 'https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/461659607_3853244688280144_6261071206023719087_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWHXBSNp0MrDLOY4QSp5BjMEi0eHrOaVwwSLR4es5pXIPpMrO20dcH_DBbMQTQz3ATjTgRlZjlo_jM3lLr9WSx&_nc_ohc=jdUbH80vggQQ7kNvwGEZtzS&_nc_oc=AdknMaE8Hd-hnddLKko9uvQIlD4bYN03f0BaD0YYP5izcCcP9AxiUldP67Aaz7BOnUU&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=Q-RRtGMdNHie-ImoiRZvvQ&oh=00_Afmx85b29zjrODukUDDyZp81DOgW0YlyYNVrItQaIGhOrQ&oe=6942F4C2',
    name: 'Waseem Akram Mumtahen',
    title: 'د خیبر ادبي ملګري د کمیټې غړی',
    desc: 'د خیبر د پښتو شاعرانو ادبي ټولنه',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/photo/?fbid=3853244684946811&set=a.1376601619277809' }
    ]
  }
]

const advisors = [
  // Add advisory committee members here if needed
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      خیبر ادبي ملګري کمیټه
    </template>
    <template #lead>
      د خیبر د پښتو شاعرانو ادبي ټولنه د دغه کمیټې لخوا اداره کېږي. دغه کمیټه د ادبي فعالیتونو او د شاعرانو د ملاتړ لپاره کار کوي.
    </template>
  </VPTeamPageTitle>
  
  <VPTeamMembers size="medium" :members="coreMembers" />
  
  <!-- Uncomment and add sections if you have different types of members -->
  <!--
  <VPTeamPageSection>
    <template #title>مشاورین</template>
    <template #lead>د کمیټې مشاورین</template>
    <template #members>
      <VPTeamMembers size="small" :members="advisors" />
    </template>
  </VPTeamPageSection>
  -->
</VPTeamPage>

