<script>
	import { enhance } from "$app/forms";
	import { currentContact } from "./stores.js";
	export let data;
</script>

<a href="/app/settings">Settings</a>

<h2>Favorites</h2>
{#each data.favoriteContacts as favorite}
	<button on:click={() => currentContact.set(favorite)}
		>{favorite.first_name} {favorite.last_name}</button
	>
{/each}

<h2>Contact Groups</h2>
<a href="/app">All Contacts</a>
{#each data.contactGroups as contact_group}
	<a style="color: {contact_group.color}" href="/app/{contact_group.id}">
		{contact_group.group_name}
	</a>
{/each}

<h3>New Contact Group</h3>
<form use:enhance type="POST" action="?/updateContactGroup">
	<input name="name" type="text" required />
	<input name="frequencyNum" type="number" required/>
	<select name="frequencyUnit" required>
		<option value="days">Days</option>
		<option value="weeks">Weeks</option>
		<option value="months">Months</option>
	</select>
	<select name="color" required>
		<option value="red">Red</option>
		<option value="orange">Orange</option>
		<option value="blue">Blue</option>
		<option value="green">Green</option>
		<option value="purple">Purple</option>
	</select>

	<button type="submit">Submit</button>
</form>

<slot />
