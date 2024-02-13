<script>
  import DropzoneButton from "./DropzoneButton.svelte";

  function handleClick() {
    console.log("asasfd");
  }
</script>

<DropzoneButton on:click={handleClick} />

<!-- 
<input
  bind:this={refInputFile}
  type="file"
  class="hidden"
  on:change={handleFilesSelect}
  accept="application/pdf"
/> -->
