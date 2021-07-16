run:
	yarn start

build-docker:
	docker build -t emoji-art .

run-docker: build-docker
	docker run -p 3002:80 -d emoji-art

push-docker: build-docker
	docker tag emoji-art unrufflednightingale/emoji-art:latest
	docker push unrufflednightingale/emoji-art

kube-apply: push-docker
	kubectl apply -f ./kube/deployment.yaml

