<script>
  import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let tableName;

  const tables = [
    "categories",
    "customers",
    "employees",
    "orders",
    "products",
    "regions",
    "shippers",
    "suppliers",
  ];

  let query = "";

  const dropdownChange = (table) => {
    query = `Select * from ${table}`;
    dispatch("changeTable", {
      table,
    });
  };
  const dispatchQuery = () => {
    dispatch("query", {
      table: tableName,
    });
  };
</script>

<header class="mb-5">
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Sql query executer</h1>
    <p class="fs-5 text-muted">write your query in below box.</p>
    <div class="dropdown">
      <ButtonDropdown>
        <DropdownToggle color="primary" caret>{tableName}</DropdownToggle>
        <DropdownMenu>
          {#each tables as table}
            <DropdownItem on:click={() => dropdownChange(table)}
              >{table}</DropdownItem
            >
          {/each}
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  </div>

  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Write Your Query"
      id="floatingTextarea2"
      style="height: 100px"
      value={query}
    />
    <label for="floatingTextarea2">Write Your Query</label>
  </div>

  <button type="button" on:click={dispatchQuery} class="btn btn-primary mt-3"
    >Execute Query</button
  >
</header>

<style>
</style>
