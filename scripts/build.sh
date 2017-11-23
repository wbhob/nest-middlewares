#!/usr/bin/env bash
rm -r ./packages
mkdir ./packages

cd src
for D in *; do
    if [ -d "${D}" ]; then
        cd ${D}
        mkdir ../../packages/${D}
        cp ./package.json ../../packages/${D}/package.json
        cd ../
    fi
done

cd ../

tsc;
