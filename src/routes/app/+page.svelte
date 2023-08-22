<script>
	import { alphabetizeContacts, daysFrom } from "$lib/common_functions";
	import { currentContact } from "./stores.js";
	import { enhance } from "$app/forms";

	export let data;

	$: alphabetizedContacts = alphabetizeContacts(data.contacts);

	let activeContact;

	currentContact.subscribe((contact) => {
		activeContact = contact;
	});

	$: editing = false;
</script>

<h2>Add New Contact</h2>
<form method="POST" use:enhance action="?/updateContact">
	<input name="first_name" />
	<input name="last_name" />
	<button type="submit">Submit</button>
</form>

<h2>Active Contact:</h2>
{#if activeContact}
	<button on:click={() => (editing = !editing)}>EDIT</button>
	{#if editing}
		<form method="POST" use:enhance action="?/updateContact">
			<input name="id" value={activeContact.id} />
			<input name="first_name" value={activeContact.first_name} />
			<input name="last_name" value={activeContact.last_name} />
			<button type="submit">Submit</button>
		</form>
	{:else}
		{activeContact.first_name} {activeContact.last_name}
	{/if} 
{:else}
	<p>No current contact</p>
{/if}

<h2>Upcoming Contacts</h2>
{#each data.upcomingContacts as upcoming}
	<p>
		{upcoming.first_name}
		{upcoming.last_name} -
		{daysFrom(upcoming.next_contact)}
	</p>
	<form method="POST" use:enhance action="?/resetReachOut">
		<input name="id" value={upcoming.id} hidden/>
		<button type="submit">reset</button>
	</form>
{/each}

{#each Object.keys(alphabetizedContacts) as letter}
	<div>
		<h2>{letter}</h2>
		{#each alphabetizedContacts[letter] as contact (contact.id)}
			<div>{contact.first_name} {contact.last_name}</div>
			<button
				on:click={() => currentContact.set(contact)}
				style="display:inline">Set current contact</button
			>
		{/each}
	</div>
{/each}
