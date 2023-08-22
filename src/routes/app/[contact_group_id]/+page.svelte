<script>
	import { daysFrom } from "$lib/common_functions";

	export let data;

	console.log(data.contacts);
</script>

<h1>Contact Group Page</h1>
<p>{data.slug}</p>

<h2>Upcoming Contacts</h2>
{#each data.upcomingContacts as upcoming}
	<p>
		{upcoming.first_name}
		{upcoming.last_name} - {daysFrom(upcoming.next_contact)}
	</p>
{/each}

<h2>Contacts</h2>
{#each data.contacts as contact}
	<p>{contact.first_name} {contact.last_name}</p>
{/each}
