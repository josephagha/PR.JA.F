<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </div>
</Router>
