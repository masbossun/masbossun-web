<script>
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

  $: isMobile = screenWidth <= 640;

  contactsCopy = {
    email: data.contacts.find((S) => S.label === "email"),
    linkedin: data.contacts.find((S) => S.label === "linkedin"),
    github: data.contacts.find((S) => S.label === "github"),
    twitter: data.contacts.find((S) => S.label === "twitter"),
    instagram: data.contacts.find((S) => S.label === "instagram"),
  };
</script>

<svelte:window bind:innerWidth={screenWidth} />

<footer id="footer" class="bg-accent py-10 text-primary negative-dark">
  <div class="mx-0 sm:mx-auto max-w-320 sm:max-w-screen-lg grid grid-cols-8">
    <div class="col-start-2 col-span-8">
      <section id="contacts" class="grid grid-cols-8 gap-10">
        <div class="col-span-8 sm:col-span-4">
          <Subtitle weight="bold">let's talk</Subtitle>
          <Spacer height={4} />
          <a href={`mailto:${contactsCopy['email'].url}?subject=let's talk`}>
            <Subtitle weight="regular">{contactsCopy['email'].url}</Subtitle>
          </a>
        </div>
      </section>
      <Spacer height={40} />
      <div class="flex flex-row opacity-60">
        <ContactButton
          href={contactsCopy['linkedin'].url}
          icon={linkedinIcon} />
        <div class="w-4" />
        <ContactButton href={contactsCopy['github'].url} icon={githubIcon} />
        <div class="w-4" />
        <ContactButton href={contactsCopy['twitter'].url} icon={twitterIcon} />
        <div class="w-4" />
        <ContactButton
          href={contactsCopy['instagram'].url}
          icon={instagramIcon} />
      </div>
      <Spacer height={40} />
      <div class="flex flex-col opacity-60">
        <Caption>v3.0.0-rc &copy; {currentYear} masbossun</Caption>
        <Caption>proudly made by myself in Jakarta, ID</Caption>
      </div>
    </div>
  </div>
</footer>
