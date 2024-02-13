<script>
  import Dropzone from "./Common/Dropzone/Dropzone.svelte";

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }
</script>

<Dropzone />

<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>
