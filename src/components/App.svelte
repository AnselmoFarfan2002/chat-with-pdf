<script>
  import { APP_STATUS, appStatus } from "../store";
  import Chat from "./Chat.svelte";
  import Loading from "./Loading.svelte";
  import Upload from "./Upload.svelte";
</script>

{#if $appStatus === APP_STATUS.INIT}
  <Upload />
{:else if $appStatus === APP_STATUS.LOADING}
  <Chat />
{:else if $appStatus === APP_STATUS.CHAT_MODE}
  <p>chat mode</p>
{:else}
  <Loading />
{/if}
