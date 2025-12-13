---
layout: page
title: Committee
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
    avatar: '/logo.jpg',
    name: 'Committee Member',
    title: 'Khyber Adabi Malgari Committee',
    desc: 'A literary community of Pashto poets from Khyber',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/khyberadabimalgari/' }
    ]
  }
  // Add more core committee members here
  // Example:
  // {
  //   avatar: '/path/to/avatar.jpg',
  //   name: 'Member Name',
  //   title: 'Committee Member',
  //   desc: 'Description of the member',
  //   links: [
  //     { icon: 'facebook', link: 'https://www.facebook.com/...' },
  //     { icon: 'github', link: 'https://github.com/...' }
  //   ]
  // }
]

const advisors = [
  // Add advisory committee members here if needed
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Khyber Adabi Malgari Committee
    </template>
    <template #lead>
      The literary community of Pashto poets from Khyber is managed by this committee. The committee works to support literary activities and poets.
    </template>
  </VPTeamPageTitle>
  
  <VPTeamMembers size="medium" :members="coreMembers" />
  
  <!-- Uncomment and add sections if you have different types of members -->
  <!--
  <VPTeamPageSection>
    <template #title>Advisors</template>
    <template #lead>Committee advisors</template>
    <template #members>
      <VPTeamMembers size="small" :members="advisors" />
    </template>
  </VPTeamPageSection>
  -->
</VPTeamPage>

