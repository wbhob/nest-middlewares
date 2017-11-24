#!/usr/bin/env bash
cd packages
for D in *; do
    if [ -d "${D}" ]; then
        cd ${D}
        cp ../../.npmignore ./.npmignore
        cd ../
    fi
done

cd ../

tsc;
