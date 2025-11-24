<template>
  <section id="team">
    <div>
      <h2 class="section-title">Team</h2>

      <p class="team-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus erat velit,
        non interdum lorem efficitur eu. Etiam hendrerit tortor at libero auctor hendrerit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="team-grid">
      <TeamMemberCard
          position="Director of Product Marketing"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Jane Smith"
      />
      <TeamMemberCard
          position="Lead Game Designer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Dr. Carlos Nguyen"
      />
      <TeamMemberCard
          position="Data Scientist"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="David Lee"
      />
      <TeamMemberCard
          position="Esports & Community Manager"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Alicia Brown"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMemberCard from "./TeamMemberCard.vue";
</script>

<style scoped>
.section-title {
  @apply text-blue-light text-3xl font-bold;
}

.team-description {
  @apply my-4 max-w-3xl text-gray-700 leading-relaxed;
}

.team-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6;
}
</style>
