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
import { coreMembers, advisors } from './src/data/providers/members'
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

