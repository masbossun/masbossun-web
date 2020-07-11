<script>
  import { StripText } from "../common";

  import FooterSection from "./FooterSection.svelte";
  import ContactButton from "./ContactButton.svelte";
  import Logo from "../common/Logo.svelte";
  import githubIcon from "@iconify/icons-uil/github";
  import twitterIcon from "@iconify/icons-uil/twitter";
  import linkedinIcon from "@iconify/icons-uil/linkedin";
  import instagramIcon from "@iconify/icons-uil/instagram-alt";
  import { Display, Title, Subtitle, Caption, Body } from "../typography";
  import data from "../../fixture";
  import Spacer from "../common/Spacer.svelte";

  let currentYear = new Date().getFullYear();
  let screenWidth;
  let contactsCopy;

  contactsCopy = {
    email: data.contacts.find((S) => S.label === "email"),
    linkedin: data.contacts.find((S) => S.label === "linkedin"),
    github: data.contacts.find((S) => S.label === "github"),
    twitter: data.contacts.find((S) => S.label === "twitter"),
    instagram: data.contacts.find((S) => S.label === "instagram"),
  };

  $: isMobile = screenWidth <= 640;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<footer id="footer" class="bg-accent py-10 px-6 text-primary negative-dark">
  <section
    id="contacts"
    class="container mx-auto max-w-screen-lg grid grid-cols-8 gap-10">
    {#if !isMobile}
      <div class="col-span-8 md:col-span-4 flex flex-col items-start my-4">
        <Logo dark={true} />
      </div>
    {/if}
    <div class="col-span-8 md:col-span-4">
      {#if isMobile}
        <StripText stripColor="light">let's talk</StripText>
        <Spacer height={8} />
        <a href={`mailto:${contactsCopy['email'].url}?subject=let's talk`}>
          <Subtitle weight="regular">{contactsCopy['email'].url}</Subtitle>
        </a>
      {:else}
        <Display class="text-right opacity-60">Let's talk</Display>
        <a href={`mailto:${contactsCopy['email'].url}?subject=let's talk`}>
          <Title class="text-primary text-right">
            {contactsCopy['email'].url}
          </Title>
        </a>
      {/if}
    </div>
  </section>

  <Spacer height={40} />

  <div class="flex flex-row opacity-60">
    <ContactButton href={contactsCopy['linkedin'].url} icon={linkedinIcon} />
    <div class="w-4" />
    <ContactButton href={contactsCopy['github'].url} icon={githubIcon} />
    <div class="w-4" />
    <ContactButton href={contactsCopy['twitter'].url} icon={twitterIcon} />
    <div class="w-4" />
    <ContactButton href={contactsCopy['instagram'].url} icon={instagramIcon} />
  </div>

  <Spacer height={40} />

  <div class="flex flex-col opacity-60">
    <Caption>&copy; {currentYear} masbossun</Caption>
    <Caption>proudly made by myself in jakarta, ID</Caption>
  </div>

  <!-- <section class="containers mx-auto max-w-screen-lg grid grid-cols-8 gap-10">
    <div class="col-span-8 md:col-span-4 flex flex-col items-center">
      <div class="flex flex-row">
        <ContactButton
          href={contactsCopy['linkedin'].url}
          icon={linkedinIcon} />
        <div class="w-6" />
        <ContactButton href={contactsCopy['github'].url} icon={githubIcon} />
        <div class="w-6" />
        <ContactButton href={contactsCopy['twitter'].url} icon={twitterIcon} />
        <div class="w-6" />
        <ContactButton
          href={contactsCopy['instagram'].url}
          icon={instagramIcon} />
      </div>
    </div>
    <div class="col-span-8 md:col-span-4">
      <Subtitle weight="bold" class="text-center">
        &copy; {currentYear} masbossun
      </Subtitle>
      <div class="h-1" />
      <Subtitle weight="regular" class="text-center">
        proudly made by myself in jakarta, ID
      </Subtitle>
    </div>
  </section> -->
</footer>
