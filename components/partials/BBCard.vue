<template>
	<v-card
		class="mx-auto"
		max-width="300"
		raised
	>
		<v-img
			src="https://picsum.photos/400/300"
			height="200px"
		></v-img>

		<v-card-title>
			O Homem de Giz
		</v-card-title>

		<v-card-subtitle>
			C. J. TUDOR
		</v-card-subtitle>

		<v-card-actions class="justify-space-between mx-2">
			<v-btn
				color="success"
				text
			>
				Comprar
			</v-btn>

			<v-dialog
				transition="dialog-top-transition"
				max-width="600"
			>
				<template #activator="{ on, attrs }">
					<v-btn
						color="orange lighten-2"
						text
						v-bind="attrs"
						v-on="on"
					>
						Detalhes
					</v-btn>
				</template>

				<template #default="dialog">
					<v-card>
						<v-toolbar
							color="primary"
							dark
						>
							O Homem de Giz
						</v-toolbar>

						<v-card-text>
							<div>
								<p class="text--primary">
									Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes.
									Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás.
									Alternando habilidosamente entre presente e passado, O Homem de Giz traz o melhor do suspense: personagens maravilhosamente construídos, mistérios de prender o fôlego e reviravoltas que vão impressionar até os leitores mais escaldados.
								</p>
							</div>
						</v-card-text>

						<v-card-actions class="justify-end">
							<v-btn
								text
								@click="dialog.value = false"
							>
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</template>
			</v-dialog>
		</v-card-actions>
	</v-card>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      };
    }, 
  };
</script>