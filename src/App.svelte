<script>
  import QueryBuilder from "./lib/QueryBuilder.svelte";
  import QueryResult from "./lib/QueryResult.svelte";

  let tableName = "Select Table";
  let queryTable = "";
  const changeTableName = (e) => {
    tableName = e.detail.table;
  };

  const onfireQuery = (e) => {
    queryTable = e.detail.table;
  };
</script>

<main class="container py-3">
  <QueryBuilder
    {tableName}
    on:changeTable={changeTableName}
    on:query={onfireQuery}
  />
  <QueryResult {queryTable} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
