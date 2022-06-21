<script>
  import JsonData from "../data/json";
  export let queryTable;
  $: selectedData = queryTable === "" ? [] : JsonData[queryTable];
  $: columns = queryTable === "" ? [] : Object.keys(selectedData[0]);
</script>

{#if queryTable !== ""}
  <table class="table" id={queryTable}>
    <thead>
      <tr>
        {#each columns as col}
          <th scope="col">{col}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each selectedData as row}
        <tr>
          {#each columns as col}
            <td>{row[col]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style>
</style>
